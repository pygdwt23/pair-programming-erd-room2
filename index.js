const express = require("express");

const bodyParser = require('body-parser');

const app = express();
let mahasiswa = require("./db/mahasiswa.json");
const anggota = require("./route/mahasiswa");

//Mahasiswa
app.use(anggota);

const routeBuku = require('./route/buku');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

// Route buku
app.use(routeBuku);

app.listen(5000, () => {
  console.log("Server udah jalan nih!");
});
