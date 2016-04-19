# Demo of using  Kotlin with Node.js
It's a little demo using Kotlin with Node.js. It uses Gradle as a build tool.

## What is Kotlin?
[![Kotlin](https://upload.wikimedia.org/wikipedia/commons/b/b5/Kotlin-logo.png)
otlin](http://kotlinlang.org) is a programming language developed by [Jetbrains](https://www.jetbrains.com/). It's fully compatibile with [Java](http://www.java.com) runtimes and also there is (currently experimental) support for [JavaScript](https://en.wikipedia.org/wiki/JavaScript) transpilation. 

## What is it doing?
* It only has two pages - index and `/kotlin_demo`
* Start node.js server and go to [http://localhost:3000](http://localhost:3000), if you go to ``/kotlin_demo`` shows you list of files in current directory (it's server's working directory) 


## Structure
* ``demo_kotlin`` - module with Kotlin code
* ``express_js`` - module with basic Node.js Express app
* ``express_js/compiled`` - transpiled .js files and Kotlin standard library (in ``lib``)
* ``express_js/bin`` - place for server's startup scripts

## How it works?
Transpiler does the transpilation to [JavaScript](https://en.wikipedia.org/wiki/JavaScript). Product of this process is file ``demo_kotlin.js``. Also you have base Kotlin JavaScript library ``kotlin.js`` that contains standard library and all support functions. JavaScript files are copyied by Gradle script to ``compiled`` directory in ``express_js`` module and after that you can use them from JavaScript.

## Install and strartup
* You'll need [Node.js](https://nodejs.org/en/) installed in your system. I'm planning to enable automatic installation from Gradle script but it's not there yet. 
* 





