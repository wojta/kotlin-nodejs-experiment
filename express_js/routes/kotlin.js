var express = require('express');
var router = express.Router();
require("../compiled/demo_kotlin");

/* GET users listing. */
router.get('/', function (req, res, next) {
    var demo= new Kotlin.modules.demo_kotlin.cz.sazel.demo_kotlin.Demo();
    var txt = JSON.stringify(demo.test()); //only converting to JSON to be more readable
    res.render('kotlin_demo', {title: 'Kotlin demo', test: txt});
});

module.exports = router;
