require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json()); // req.body

// routes

// get http://localhost:5000/
app.get('/', async (req, res)=>{
  const response = await pool.query(`select 'Hello World' AS greeting`)
  res.json(response.rows[0])   // {"greeting":"Hello World"}
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}.`);
});