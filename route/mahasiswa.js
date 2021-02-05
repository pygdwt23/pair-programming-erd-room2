const express = require("express");

const route = express();

const dbController = require('./../controller/db')


//GET
route.get("/api/v1/mahasiswa",dbController.getAPIMahasiswa );

route.get("/api/v1/mahasiswa/:id",dbController.getAPIByIdMahasiswa);

//POST
route.post("/api/v1/mahasiswa",dbController.postAPIMahasiswa );

//PUT
route.put("/api/v1/mahasiswa/:id",dbController.putAPIMahasiswa );

//DELETE
route.delete("/api/v1/mahasiswa/:id",dbController.deleteAPIMahasiswa );

module.exports = route;
