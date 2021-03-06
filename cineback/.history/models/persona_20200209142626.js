const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema({
    nombre : {
        type: String,
        required: true
    },
    resumen: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Pelicula', PersonaSchema);