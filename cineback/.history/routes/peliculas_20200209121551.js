const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula')


router.get('/', (req, res) =>{
    res.send('aqui estamos papa');
});

router.post('/', (req, res) => {
    const pelicula = new Pelicula({
        titulo: req.body
    })
})


module.exports = router;