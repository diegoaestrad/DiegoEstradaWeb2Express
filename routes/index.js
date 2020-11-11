var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DiegoEstradaWeb2Express' });
});

/* GET About page. */
router.get('/about', (req, res, next) => {
    res.render('about', { message: 'Diego Estrada - 200427046', window: 'About Window', url: 'https://ca.linkedin.com/in/ingenierodesistemas'})
});

/* GET Projects page. */
router.get('/projects', (req, res, next) => {
    res.render('projects', { message: 'Diego Estrada - 200427046', window: 'Project Window'})
});

/* GET Services page. */
router.get('/services', (req, res, next) => {
    res.render('services', { message: 'Diego Estrada - 200427046', window: 'Services Window'})
});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
    res.render('contact', { message: 'Diego Estrada - 200427046', window: 'Contact Window' })
});

module.exports = router;
