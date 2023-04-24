// controller
module.exports.home_get = (req, res) => {
    res.render('index', { title: 'Home'});
};

module.exports.form_get = (req, res) => {
    res.render('form', { title: 'Form'});
};