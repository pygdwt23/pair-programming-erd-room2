const express = require("express");

const bodyParser = require('body-parser');

const app = express();
const anggota = require("./route/mahasiswa");
const routeBuku = require('./route/buku');
const routePeminjaman = require('./route/peminjaman');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

// Route buku
app.use(routeBuku);
//Mahasiswa
app.use(anggota);
// Peminjaman
app.use(routePeminjaman);

app.listen(5000, () => {
  console.log("Server udah jalan nih!");
});
