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

// ================================
// # 03 - Module

//-- Chalk
// import chalk from "chalk";
// console.log(chalk.bgRed("Red background"));
// console.log(chalk.green.bold.bgBlue("Text green, bold, background blue"));
// console.log(chalk.yellow.underline("Underline , text yellow"));

// ================================
// 04 - JSON
import { read, readFileSync, writeFileSync } from "node:fs";

//-- JSON to object
// const dataObject = JSON.parse(readFileSync("./data.json", "utf-8"));
// const { name, age } = dataObject;
// console.log(dataObject);
// console.log(name + " , " + age);

//-- Object to json
// const myObject = {
//   name: "Nantenaina",
//   age: 22,
// };
// console.log(JSON.stringify(myObject));

//-- Create a json
// const newData = {
//   city: "Fianarantsoa",
//   code: 301,
// };
// writeFileSync("./newData.json", JSON.stringify(newData));

//-- Update json
// const data = JSON.parse(readFileSync("./data.json", "utf-8"));
// data.name = "Edouardo";
// writeFileSync("./data.json", JSON.stringify(data));
