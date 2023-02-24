import {Calculator,Trigonometry,MemoryHandler} from "./program.js"
let obj = new Calculator()
let trigonoObj = new Trigonometry();
let memoryObj = new MemoryHandler();
//Input numbers
document.getElementById("one").addEventListener('click', function () {
    obj.showNumber("one");
});
document.getElementById("two").addEventListener('click', function () {
    obj.showNumber("two");
});
document.getElementById("three").addEventListener('click', function () {
    obj.showNumber("three");
});
document.getElementById("four").addEventListener('click', function () {
    obj.showNumber("four");
});
document.getElementById("five").addEventListener('click', function () {
    obj.showNumber("five");
});
document.getElementById("six").addEventListener('click', function () {
    obj.showNumber("six");
});
document.getElementById("seven").addEventListener('click', function () {
    obj.showNumber("seven");
});
document.getElementById("eight").addEventListener('click', function () {
    obj.showNumber("eight");
});
document.getElementById("nine").addEventListener('click', function () {
    obj.showNumber("nine");
});
document.getElementById("zero").addEventListener('click', function () {
    obj.showNumber("zero");
});
//operation
document.getElementById("add").addEventListener('click', function () {
    obj.signOperation("add");
});
document.getElementById("subtract").addEventListener('click', function () {
    obj.signOperation("subtract");
});
document.getElementById("multiply").addEventListener('click', function () {
    obj.signOperation("multiply");
});
document.getElementById("devide").addEventListener('click', function () {
    obj.signOperation("devide");
});
document.getElementById("mod").addEventListener('click', function () {
    obj.signOperation("mod");
});
document.getElementById("xPowY").addEventListener('click', function () {
    obj.signOperation("xPowY");
});
//equal,backspac,clear
document.getElementById("equal").addEventListener('click', function () {
    obj.calsiOperation("equal");
});
document.getElementById("backSpace").addEventListener('click', function () {
    obj.calsiOperation("backSpace");
});
document.getElementById("clear").addEventListener('click', function () {
    obj.calsiOperation("clear");
});
//mathe operation
document.getElementById("log").addEventListener('click', function () {
    obj.calsiOperation("log");
});
document.getElementById("ln").addEventListener('click', function () {
    obj.calsiOperation("ln");
});
document.getElementById("tenPowerX").addEventListener('click', function () {
    obj.calsiOperation("tenPowerX");
});
document.getElementById("squareRoot").addEventListener('click', function () {
    obj.calsiOperation("squareRoot");
});
document.getElementById("square").addEventListener('click', function () {
    obj.calsiOperation("square");
});
document.getElementById("oneByX").addEventListener('click', function () {
    obj.calsiOperation("oneByX");
});
document.getElementById("abs").addEventListener('click', function () {
    obj.calsiOperation("abs");
});
document.getElementById("exp").addEventListener('click', function () {
    obj.calsiOperation("exp");
});
document.getElementById("FE").addEventListener('click', function () {
    obj.calsiOperation("FE");
});
//point,pi and e.
document.getElementById("point").addEventListener('click', function () {
    obj.calsiPointOperation();
});
document.getElementById("pi").addEventListener('click', function () {
    obj.calsiPIOperation();
});
document.getElementById("e").addEventListener('click', function () {
    obj.calsiEOperation();
});
//brackets
document.getElementById("openbracket").addEventListener('click', function () {
    obj.calsiBodmas("openbracket");
});
document.getElementById("closebracket").addEventListener('click', function () {
    obj.calsiBodmas("closebracket");
});
//plus-min and factorial
document.getElementById("plus-min").addEventListener('click', function () {
    obj.calsiBodmas("plus-min");
});
document.getElementById("factorial").addEventListener('click', function () {
    obj.calsiFactorialFind();
});
//trigonometry
document.getElementById("sin").addEventListener('click', function () {
    trigonoObj.CalsiTrigonometry("sin");
});
document.getElementById("cos").addEventListener('click', function () {
    trigonoObj.CalsiTrigonometry("cos");
});
document.getElementById("tan").addEventListener('click', function () {
    trigonoObj.CalsiTrigonometry("tan");
});
document.getElementById("sec").addEventListener('click', function () {
    trigonoObj.CalsiTrigonometry("sec");
});
document.getElementById("cosec").addEventListener('click', function () {
    trigonoObj.CalsiTrigonometry("cosec");
});
document.getElementById("cot").addEventListener('click', function () {
    trigonoObj.CalsiTrigonometry("cot");
});
//functions
document.getElementById("abslute").addEventListener('click', function () {
    trigonoObj.calsiFunction("abslute");
});
document.getElementById("squrX").addEventListener('click', function () {
    trigonoObj.calsiFunction("squrX");
});
document.getElementById("dolor").addEventListener('click', function () {
    trigonoObj.calsiFunction("dolor");
});
//memory function
document.getElementById("mc").addEventListener('click', function () {
    memoryObj.calsiMemoryOperation("mc");
});
document.getElementById("mr").addEventListener('click', function () {
    memoryObj.calsiMemoryOperation("mr");
});
document.getElementById("mAdd").addEventListener('click', function () {
    memoryObj.calsiMemoryOperation("mAdd");
});
document.getElementById("mSubtract").addEventListener('click', function () {
    memoryObj.calsiMemoryOperation("mSubtract");
});
document.getElementById("ms").addEventListener('click', function () {
    memoryObj.calsiMemoryOperation("ms");
});
//twoND
document.getElementById("twoND").addEventListener('click', function () {
    memoryObj.calsiMemoryOperation("twoND");
});

