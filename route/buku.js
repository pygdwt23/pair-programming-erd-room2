const express = require('express');

let book = require('./../db/buku.json');

const router = express.Router();

router.get('/api/v1/buku', (req, res) => {
    res.status(200).json(book);
});

router.get('/api/v1/buku/:id', (req, res) => {
    const searchBook = book.find(data => data.ïd_buku === +req.params.id);
    if (searchBook !== undefined) {
        res.status(200).json(searchBook);
    } else {
        res.status(200).json({
            error: "true",
            message: `id ${req.params.id} yang anda cari tidak ditemukan`
        })
    }
});

router.post('/api/v1/buku', (req, res) => {
    const { nama, pengarang, penerbit } = req.body;

    const id = book[book.length - 1].ïd_buku + 1;
    const newBook = {
        id_buku: id,
        nama,
        pengarang,
        penerbit
    }
    book.push(newBook);
    res.status(201).json(book);
});

router.put('/api/v1/buku/:id', (req, res) => {
    const id = req.params.id;
    book.filter(data => {
        if (data.id === parseInt(id)) {
            data.nama = req.body.nama;
            data.pengarang = req.body.pengarang;
            data.penerbit = req.body.penerbit;
            return data;
        }
    })
    res.status(200).json(book);
});

router.delete('/api/v1/buku/:id', (req, res) => {
    book = book.filter(data => data.ïd_buku !== +req.params.id)
        res.status(200).json(book);
});

module.exports = router;