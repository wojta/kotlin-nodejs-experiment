var express = require('express');
var router = express.Router();
var Demo=require("../compiled/demo_kotlin").cz.sazel.demo_kotlin.Demo;

/* GET users listing. */
router.get('/', function (req, res, next) {
    var demo= new Demo();
    var txt = JSON.stringify(demo.test()); //only converting to JSON to be more readable
    res.render('kotlin_demo', {title: 'Kotlin demo', test: txt});
});

module.exports = router;
