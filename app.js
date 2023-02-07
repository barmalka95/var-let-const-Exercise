// ES5 Global Constants
// var PI = 3.14;
// PI = 42; // stop me from doing this!
// ES2015 Global Constants
// /* Write an ES2015 Version */
const PI = 42;

// Quiz

// What is the difference between var and let?
let is a block scope, you can not redeclare variable using let
you can access hoisted variable with var but not with let

// What is the difference between var and const?
you can not reassign or declare const, you can do both with var.
const is a block scope, you cannot access it with hoisted

// What is the difference between let and const?
you cannot reassign or redeclare const, you can reassign let

// What is hoisting?
when you can access the variable name before you declare it, you can do it using var but not with let or const