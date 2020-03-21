
const express = require('express');
const app = express();
const cors = require('cors');
const student = require('./router/customer');

app.use(cors());
app.use(express.json());
app.use(student);


app.listen(5200);
console.log("Server running at 5200");
