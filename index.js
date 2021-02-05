const express = require("express");
const app = express();
let mahasiswa = require("./db/mahasiswa.json");
const anggota = require("./route/mahasiswa");

//Mahasiswa
app.use(anggota);

app.listen(5000, () => {
  console.log("Server udah jalan nih!");
});
