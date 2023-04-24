// packages
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    input1: {
        type: String
    },
    input2: {
        type: Number
    }
});

const formDocument = mongoose.model('formDocument', formSchema);

module.exports = { formSchema, formDocument };