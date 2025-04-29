const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbms_project'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting: ' + err);
        return;
    }
    else {
        console.log('Connected as id ' + connection.threadId);
    }
});


module.exports.RegisterUser = (req, res) => {

    const { username, email, password } = req.body;
    console.log('data:', username, email, password);



    const sql = `SELECT * FROM users where email =?`;
    const values = [email];

    connection.query(sql, values, (err, results, fields) => {

        if (err) throw err;
        console.log('redulsts', results[0]);
        if (results[0]) {
            res.status(200).json({ message: "user alredy registrered" })

        } else {
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;

                bcrypt.hash(password, salt, (err, hashedPassword) => {
                    if (err) throw err;

                    // ------> -------------------------------

                    const sql = `INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)`;
                    const values = [username, email, hashedPassword];

                    connection.query(sql, values, (err, results) => {
                        if (err) {
                            console.error("Error inserting user:", err);
                            return res.status(500).send("Error registering user.");
                        }

                        
                        const sql = `SELECT * FROM users where email =?`;
                        const values = [email];
                        
                        try {
                            connection.query(sql, values, (err, results, fields) => {
                                if (err) throw err;
                                console.log(results[0]);
                                if (results) {
                                    console.log("User created successfully.", results[0]);
                                    const token = jwt.sign({ email,user_id: results[0].user_id }, "secret");
                                    res.cookie("token", token);

                                    res.status(200).json({ message: "user registred", user: results })
                                } else {
                                    res.status(400).json({ message: "user nor found", user: results[0] });
                                }
                            })
                        } catch (error) {
                            res.status(500).json({ message: "internal server error" });
                        }




                    });
                })
            })
        }
    });

}



module.exports.LoginUser = (req, res) => {
    const { password, email } = req.body;

    const sql = `SELECT * FROM users where email =?`;
    const values = [email];


    connection.query(sql, values, (err, results, fields) => {

        if (err) throw err;

        if (results.length === 0) {
            return res.status(404).send("User not found");
        }
        const hashedResult = results[0].password_hash;
        console.log("------------->", hashedResult);
        console.log("-========================>", results[0].user_id);

        bcrypt.compare(password, hashedResult, (err, isMatch) => {
            if (isMatch) {
                const token = jwt.sign({ email: email,user_id: results[0].user_id  }, "secret");

                // ------------------------------------------------------------>>>>>>>
                console.log("------------------------------------------------------->", token)
                res.cookie("token", token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 3600000 * 24 * 30) // 30 days
                });

                res.status(200).json({ message: "user logged in", user: results })
            } else {
                console.log("Invalid credentials");
                return res.status(401).send("Invalid credentials");
            }
        });
    })

}


module.exports.getUserProfile = (req, res) => {

    const token = req.cookies.token;

    const decode = jwt.verify(token, "secret");

    const sql = `SELECT * FROM users where email =?`;
    const values = [decode.email];
    try {
        connection.query(sql, values, (err, results, fields) => {
            if (err) throw err;
            console.log(results[0]);
            if (results) {
                console.log("user profile", results[0]);
                res.status(200).json({ message: "user profile", user: results[0] });
            } else {
                res.status(400).json({ message: "user nor found", user: results[0] });
            }
        })
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
}


module.exports.editUserProfile = (req, res) => {

    const token = req.cookies.token;

    const decode = jwt.verify(token, "secret");

    const { description, username } = req.body;

    console.log('--------->', description);


    // const sql = `SELECT * FROM users where email =?`;
    const sql = `UPDATE users SET description = ? WHERE email = ?`;
    const values = [description, decode.email];
    try {
        connection.query(sql, values, (err, results, fields) => {
            if (err) throw err;
            if (results) {
                console.log("user profile", results[0]);
                res.status(200).json({ message: "user modified" });
            } else {
                res.status(400).json({ message: "user nor found", user: results[0] });
            }
        })
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
}




