// packages
const mongoose = require('mongoose');

const { formDocument } = require('../models/form');

// controller
module.exports.form_post = async (req, res) => {
    const data = req.body;

    const document = new formDocument(data.parcel);
    
    // save document
    try {
        const allDocs = await formDocument.aggregate([
            {
                '$project': {
                    'navn': true, 
                    '_id': false
                }
            }
        ]);

        for(let i = 0; i < allDocs.length; i++) {
            const navn = allDocs[i].navn;

            if (navn === data.parcel.navn) {
                res.status(200).send({
                    status: 'Navnet finnes allerede i databasen!'
                });
                return;
            }
        }

        document.save();
        res.status(200).send({
            status: 'Document has been uploaded'
        });
    } catch (err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    };
};

module.exports.form_readOne = async (req, res) => {
    const data = req.body;
    
    const docId = data.id;

    try {
        const document = await formDocument.findOne({ _id: docId });
        res.status(200).send({
            status: 'Document has been read',
            document
        });
    } catch (err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    };
};

module.exports.form_updateOne = async (req, res) => {
    const data = req.body;

    console.log(data);

    try {
        const oldDoc = await formDocument.findOne({ _id: data.id });
        const update = data.document;
        await oldDoc.updateOne(update);

        const newDoc = await formDocument.findOne({ _id: data.id});
        res.status(200).send({
            status: 'Dokument has been updated',
            document: newDoc
        });
    } catch(err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    };
};

module.exports.form_deleteOne = async (req, res) => {
    const data = req.body;

    console.log(data);

    try {
        await formDocument.findOneAndRemove({ _id: data.id });
        console.log('Deleted document');
        res.status(200).send({
            status: 'Document has been deleted'
        });
    } catch(err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    }
};

module.exports.form_getAllIds = async (req, res) => {
    try {
        const allDocs = await formDocument.find({ });

        let alleNavn = [];

        for (let i = 0; i < allDocs.length; i++) {
            const navn = allDocs[i].navn;
            alleNavn.push(navn);
        };

        res.status(200).send({
            status: 'fetched all names',
            alleNavn
        });
    } catch(err) {
        console.error(err);
        res.status(400).send({
            status: `error: ${err}`
        });
    };
};