console.log("app running...");

import moduleA from "./moduleA.js";
console.log(moduleA.moduleA_var1);
moduleA.moduleA_fun1();

import moduleB_fun2, { moduleB_var1, moduleB_fun1 } from "./moduleB.js";
console.log(moduleB_var1);
moduleB_fun1();
moduleB_fun2();