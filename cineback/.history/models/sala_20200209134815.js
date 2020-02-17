const mongoose = require('mongoose');

const SalaSchema = mongoose.Schema({
    nombre : {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        enum : ['comedia','terror', 'drama'],
        default: 'comedia'
    },
    horario: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Sala', SalaSchema);