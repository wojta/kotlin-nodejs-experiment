/**
 * Created by wojta on 15.4.16.
 */
var fs = require('fs');
var PATH_TO_KOTLIN_JS_DIR = "../compiled";
//kotlin.js has module support by default
var Kotlin = require(PATH_TO_KOTLIN_JS_DIR + "/lib/kotlin");

//Kotlin compiled script needs to be evaled, I don't know any better solution. 
var demoScript = fs.readFileSync(PATH_TO_KOTLIN_JS_DIR + "/demo_kotlin.js", {encoding: "UTF-8"});
eval(demoScript);

function test() {
    //instantiating Kotlin class
    var demo= new Kotlin.modules.demo_kotlin.cz.sazel.demo_kotlin.Demo();
    //executing method test, which returns 
    return demo.test();
}

module.exports = {"test": test};