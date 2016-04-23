package cz.sazel.demo_kotlin

/**
 * Simple class in Kotlin to show Node.js interoperability.
 */
class Demo {
    var fs: dynamic = require("fs");

    /**
     * Returns list of files in the curent directory.
     */
    fun test(): dynamic {
        var test="abcd"
        var pokus="xyz_$test"
        return fs.readdirSync(".")
    }
}