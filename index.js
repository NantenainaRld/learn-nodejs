// ================================
// # 01 - First Script

// console.log("Hello World");

// FIlesystem
// const fs = require("fs");

//-- writeFileSync
// fs.writeFileSync("test01.txt", "This is the test for the writeFileSync");

//-- readFileSync
// const fileContent = fs.readFileSync("test01.txt", "utf8");
// console.log(fileContent);
// =================================

// =================================
// # 02 - Import/export module

//-- CommonJS
// const mod = require("./module");
// console.log(mod.function00() + " " + mod.function01());

//-- ES6 module
// import { function00, function01 } from "./module.js";
// console.log(function00(), function01());

//-- Math module
// import { chain } from "mathjs";

// console.log(chain(5).add(2).divide(3).multiply(4).done()); // ((5 + 2) / 2) * 4 = 9.3333
// =================================
