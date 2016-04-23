/**
 * Created by wojta on 15.4.16.
 */
var fs = require('fs');
//kotlin.js has module support by default
//it must be global so we can use it other modules
global.Kotlin = require("../compiled/lib/kotlin");
require("../compiled/demo_kotlin");

function test() {
    //instantiating Kotlin class
    var demo= new Kotlin.modules.demo_kotlin.cz.sazel.demo_kotlin.Demo();
    //executing method test, which returns 
    return demo.test();
}

module.exports = {"test": test};

//@ sourceURL=../compiled/demo_kotlin.js
