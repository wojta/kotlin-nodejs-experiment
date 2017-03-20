# Demo of using  Kotlin with Node.js
It's a little demo using Kotlin with Node.js. It uses Gradle as a build tool.

## What is Kotlin?
[![Kotlin](https://upload.wikimedia.org/wikipedia/commons/b/b5/Kotlin-logo.png)
otlin](http://kotlinlang.org) is a programming language developed by [Jetbrains](https://www.jetbrains.com/). It's fully compatibile with [Java](http://www.java.com) runtimes and also there is (currently experimental) support for [JavaScript](https://en.wikipedia.org/wiki/JavaScript) transpilation. 

## What is it doing?
* It only has two pages - index and `/kotlin_demo`
* `/kotlin_demo` shows list of files in current directory by using calls from [Demo](demo_kotlin/src/main/kotlin/cz/sazel/demo_kotlin/Demo.kt) class

## Structure
* ``demo_kotlin`` - module with Kotlin code
* ``express_js`` - module with basic Node.js Express app
* ``express_js/compiled`` - transpiled .js files and Kotlin standard library (in ``lib``)
* ``express_js/bin`` - place for server's startup scripts

## How it works?
Transpiler does the transpilation to [JavaScript](https://en.wikipedia.org/wiki/JavaScript). Product of this process is file ``demo_kotlin.js``. Also you have base Kotlin JavaScript library ``kotlin.js`` that contains standard library and all support functions. JavaScript files are copyied by Gradle script to ``compiled`` directory in ``express_js`` module and after that you can use them from JavaScript.

Kotlin Gradle plugin handles building Node.js compatibile modules (CommonJS) by adding parameter
 
 `kotlinOptions.moduleKind = "commonjs"`

## Accessing Kotlin class from JavaScript

Check [express_js/route/kotlin.js](express_js/route/kotlin.js)

`var Demo=require("../compiled/demo_kotlin").cz.sazel.demo_kotlin.Demo;`


## Install and strartup
* You'll need [Node.js](https://nodejs.org/en/) (probably version >=5) installed in your system.  
* If you used previous version of this experiment, please run `:demo_kotlin:clean` Gradle task.
* Do `./gradlew build`
* Do `./gradlew :express_js:npmInstall` or `npm install` in *express_js* directory
* Start server by starting `express_js/bin/www` and go to page [http://localhost:3000/kotlin_demo](http://localhost:3000/kotlin_demo) 




