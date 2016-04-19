var express = require('express');
var router = express.Router();
var kotlin= require('../modules/kotlin_import');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var txt=JSON.stringify(kotlin.test()); //only converting to JSON to be more readable
    res.render('kotlin_demo', {title: 'Kotlin demo', test:txt});
});

module.exports = router;
