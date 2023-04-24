// imports
const Router = require('express');
const formController = require('../controllers/formController');

// create router
const router = Router();

// routes
router.post('/form-submit', formController.form_post);

router.post('/form-read', formController.form_readOne);

router.post('/form-update', formController.form_updateOne);

router.post('/form-delete', formController.form_deleteOne);

router.post('/form-getAllIds', formController.form_getAllIds);

// export
module.exports = router;