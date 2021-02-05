const express = require("express");

const route = express();

const dbController = require('./../controller/db')

//GET
route.get("/api/v1/peminjaman",dbController.getAPIPeminjaman );

route.get("/api/v1/peminjaman/:id",dbController.getAPIByIdPeminjaman);

//POST
route.post("/api/v1/peminjaman",dbController.postAPIPeminjaman );

//PUT
route.put("/api/v1/peminjaman/:id",dbController.putAPIPeminjaman );

//DELETE
route.delete("/api/v1/peminjaman/:id",dbController.deleteAPIPeminjaman );

module.exports = route;
