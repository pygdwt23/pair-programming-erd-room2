const express = require('express');
const dbController = require('./../controller/db');

const router = express.Router();

router.get('/api/v1/buku',dbController.getAPI );

router.get('/api/v1/buku/:id',dbController.getAPIById );

router.post('/api/v1/buku',dbController.postAPI );

router.put('/api/v1/buku/:id', dbController.putAPI);

router.delete('/api/v1/buku/:id',dbController.deleteAPI );

module.exports = router;