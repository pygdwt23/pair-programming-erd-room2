// buku controller
let book = require('./../db/buku.json');

exports.getAPI = (req, res) => {
    res.status(200).json(book);
}

exports.getAPIById = (req, res) => {
    const searchBook = book.find(data => data.id === +req.params.id);
    if (searchBook !== undefined) {
        res.status(200).json(searchBook);
    } else {
        res.status(200).json({
            error: true,
            message: `id ${req.params.id} yang anda cari tidak ditemukan`
        })
    }
};

exports.postAPI = (req, res) => {
    const { nama, pengarang, penerbit } = req.body;

    const id = parseInt(book[book.length - 1].id) + 1;
    console.log(book);
    const buku = {
        id,
        nama,
        pengarang,
        penerbit
    };
    book.push(buku);
    res.status(201).json({
        error: false,
        message: `buku dengan id ${req.params.id} berhasil dibuat!`
    });
};

exports.putAPI = (req, res) => {
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
}

exports.deleteAPI = (req, res) => {
    book = book.filter(data => data.id !== +req.params.id)
        res.status(200).json({
            error: false,
            message: `buku dengan id ${req.params.id} berhasil dihapus!`
        });
};

// mahasiswa controller
let mahasiswa = require("../db/mahasiswa.json");

exports.getAPIMahasiswa = (req, res) => {
    res.status(200).json(mahasiswa);
  }

exports.getAPIByIdMahasiswa = (req, res) => {
    const mhs = mahasiswa.find(
        (i) => i.id_mahasiswa === +req.params.id
    );
    if (mhs !== undefined) {
        res.status(200).json(mhs);
    } else {
        res.status(400).json({
            error: true,
            message: `id ${req.params.id} tidak ada!`
        })
    }
};

exports.postAPIMahasiswa = (req, res) => {
    const { nim_anggota, nama_anggota } = req.body;
  
    const id_mahasiswa = mahasiswa[mahasiswa.length - 1].id_mahasiswa + 1;
    console.log(id_mahasiswa);
    console.log(mahasiswa)
    const mhs = {
      id_mahasiswa,
      nim_anggota,
      nama_anggota,
    };
    mahasiswa.push(mhs);
    res.status(201).json(mahasiswa);
  };

exports.putAPIMahasiswa = (req, res) => {
    let mhs = mahasiswa.find((i) => i.id_mahasiswa === +req.params.id);
    const params = {
        nim_anggota: req.body.nim_anggota,
        nama_anggota: req.body.nama_anggota,
    };
    mhs = { ...mhs, ...params };
    mahasiswa = mahasiswa.map((i) =>
        i.id_mahasiswa === mhs.id_mahasiswa ? mhs : i
    );
    res.status(200).json({
        message: `Mahasiswa dengan id ${req.params.id} berhasil di update`,
    });
};

exports.deleteAPIMahasiswa = (req, res) => {
    mahasiswa = mahasiswa.filter((i) => i.id_mahasiswa !== +req.params.id);
    res.status(200).json(mahasiswa);
};
  
// mahasiswa controller
let peminjaman = require("../db/peminjaman.json");

exports.getAPIPeminjaman = (req, res) => {
    res.status(200).json(peminjaman);
  }

exports.getAPIByIdPeminjaman = (req, res) => {
    const newPeminjaman = peminjaman.find(
        (i) => i.ïd_peminjaman === +req.params.id
    );
    if (newPeminjaman !== undefined) {
        res.status(200).json(newPeminjaman);
    } else {
        res.status(400).json({
            error: true,
            message: `id ${req.params.id} tidak ada!`
        })
    }
};

exports.postAPIPeminjaman = (req, res) => {
    const { id_mahasiswa, id_buku, tanggal_pinjam, tanggal_kembali } = req.body;
  
    const ïd_peminjaman = peminjaman[peminjaman.length - 1].ïd_peminjaman + 1;
    const pinjam = {
        ïd_peminjaman,
        id_mahasiswa,
        id_buku,
      tanggal_pinjam,
      tanggal_kembali,
    };
    peminjaman.push(pinjam);
    res.status(201).json(peminjaman);
  };

exports.putAPIPeminjaman = (req, res) => {
    const id = req.params.id;
    peminjaman.filter(data => {
        if (data.ïd_peminjaman == id) {
            data.id_mahasiswa = req.body.id_mahasiswa;
            data.id_buku = req.body.id_buku;
            data.tanggal_pinjam = req.body.tanggal_pinjam;
            data.tanggal_kembali = req.body.tanggal_kembali;
            return data;
        }
    })
    res.status(200).json(peminjaman);
};

exports.deleteAPIPeminjaman= (req, res) => {
    peminjaman = peminjaman.filter((i) => i.ïd_peminjaman !== +req.params.id);
    res.status(200).json({
        error: false,
        message: `peminjaman buku dengan id ${req.params.id} berhasil dihapus!`
    });
  };