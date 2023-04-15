const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
