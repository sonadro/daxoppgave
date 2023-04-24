// packages
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    navn: {
        type: String
    },
    dato: {
        type: String
    }
});

const formDocument = mongoose.model('formDocument', formSchema);

module.exports = { formSchema, formDocument };