const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
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


module.exports.create_post = (req, res) => {

    const token = req.cookies.token;

    const decode = jwt.verify(token, "secret");

    console.log('==---->', decode.user_id);




    const { user_id, content, image_url } = req.body;
    console.log('data:', user_id, content, image_url);



    // const sql = `SELECT * FROM post where email =?`;
    // const values = [decode.email];

    // connection.query(sql, values, (err, results, fields) => {

    //     if (err) throw err;
    //     console.log('redulsts', results[0]);
    //     if (results[0]) {
    //         res.status(200).json({ message: "user alredy registrered" })

    //     } else {
    // bcrypt.genSalt(10, (err, salt) => {
    //     if (err) throw err;

    //     bcrypt.hash(password, salt, (err, hashedPassword) => {
    //         if (err) throw err;

    const sql = `INSERT INTO posts (user_id, content, image_url) VALUES (?, ?, ?)`;
    const values = [decode.user_id, content, image_url];

    connection.query(sql, values, (err, results) => {
        console.log(results);

        if (err) {
            console.error("Error createing post:", err);
            return res.status(500).send("Error sreating posts.");
        }

        res.status(200).json({ message: "post created", post: results })


        // });
        // })
        // })
        // }
    });

}

module.exports.getUserPosts = (req, res)=>{

    const token = req.cookies.token;
    const post_id = req.params;

    const decode = jwt.verify(token, "secret");

    const sql = `SELECT * FROM users where email =?`;
    const values = [decode.email];

    try {
        connection.query(sql, values, (err, results, fields) => {
            if (err) throw err;
            console.log(results[0]);
            if (results) {
                console.log("user found", results[0]);

                const sql = `
                    SELECT * from posts 
                    inner join users 
                    on users.user_id = posts.user_id
                    where users.email = ?
                    order by posts.created_at desc;

                `;
                const value = [decode.email];
                console.log(value);

                

                connection.query(sql,value, (err, results, fields) => {
                    console.log('all posts', results);
                    if (results) {
                        res.status(200).json({ message: "posts fetched", userPosts: results })

                    } else {
                        res.status(400).json({ message: "posts failed" });
                    }


                })
            } else {
                res.status(400).json({ message: "user not found", user: results[0] });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "user not found" });
    }


}

module.exports.getAllPosts = (req, res) => {

    const token = req.cookies.token;
    const post_id = req.params;

    const decode = jwt.verify(token, "secret");

    const sql = `SELECT * FROM users where email =?`;
    const values = [decode.email];

    try {
        connection.query(sql, values, (err, results, fields) => {
            if (err) throw err;
            console.log(results[0]);
            if (results) {
                console.log("user found", results[0]);

                const sql = `
                    SELECT * from posts 
                    inner join users 
                    on users.user_id = posts.user_id
                    order by posts.created_at desc;

                `;

                

                connection.query(sql, (err, results, fields) => {
                    console.log('all posts', results);
                    if (results) {
                        res.status(200).json({ message: "posts fetched", posts: results })

                    } else {
                        res.status(400).json({ message: "posts failed" });
                    }


                })
            } else {
                res.status(400).json({ message: "user not found", user: results[0] });
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




