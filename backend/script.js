const express = require('express');
const app = express();
const user = require('./routes/user.routes')
const cors = require('cors')
const mysql = require('mysql2');



app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));



app.use("/api/user/", user)

app.listen(3000, () => {
  console.log('server is running on port 3000')
})