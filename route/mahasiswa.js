const express = require("express");
let mahasiswa = require("../db/mahasiswa.json");
const route = express();

//Middleware
route.use(express.json());

//GET
route.get("/api/v1/mahasiswa", (req, res) => {
  res.status(200).json(mahasiswa);
});

route.get("/api/v1/mahasiswa/:id", (req, res) => {
  const mhs = mahasiswa.find((i) => i.id_mhs === +req.params.id_mhs);
  res.status(200).json(mhs);
});

//POST
route.post("/api/v1/mahasiswa", (req, res) => {
  const { nim_anggota, nama_anggota } = req.body;

  const id_mhs = mahasiswa[mahasiswa.length - 1].id_mhs + 1;
  const mhs = {
    id_mhs,
    nim_anggota,
    nama_anggota,
  };
  mahasiswa.push(mhs);
  res.status(201).json(mhs);
});

//PUT
route.put("/api/v1/mahasiswa/:id", (req, res) => {
  let mhs = mahasiswa.find((i) => i.id_mhs === +req.params.id_mhs);
  const params = {
    nim_anggota: req.body.nim_anggota,
    nama_anggota: req.body.nama_anggota,
  };
  mhs = { ...mhs, ...params };
  mahasiswa = mahasiswa.map((i) => (i.id_mhs === mhs.id_mhs ? mhs : i));
  res.status(200).json({
    message: `Mahasiswa dengan id ${req.params.id} berhasil di update`,
  });
});

//DELETE
route.delete("/api/v1/mahasiswa/:id", (req, res) => {
  mahasiswa = mahasiswa.filter((i) => i.id_mhs !== +req.params.id_mhs);
  res.status(200).json({
    message: `Mahasiswa dengan id ${req.params.id_mhs} berhasil dihapus!`,
  });
});

module.exports = route;
