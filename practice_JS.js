// console.log("Hello JS");
var memberArray = ['aaa', 'bbb', 'ccc'];
// console.log("memberArray[0]", memberArray[0]);
console.group('array loop');
var i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i+=1;
}
console.groupEnd('array loop');

var memberObject = {
    A:'aaa',
    B:'bbb',
    C:'Ccc'
}
console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');
// memberObject.C = "ccc";
// console.log("memberObject.C", memberObject.C);
// console.log("memberObject.C", memberObject["C"]);
// delete memberObject.A
// console.log("after delete memberObject.A", memberObject.A);
console.log("Math.PI",Math.PI);
console.log("Math.random", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));

var Mymath = {
    PI: Math.PI,
    Random: function() {
        return Math.random();
    },
    Floor: function(value) {
        return Math.floor(value);
    }
}
console.log("Mymath.PI",Mymath.PI);
console.log("Mymath.Random",Mymath.Random());
console.log("Mymath.Floor(3.9)",Mymath.Floor(3.9));

var kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second;
    }
}
console.log("kim.sum()",kim.sum());

var d1 = new Date('2025-03-20');
console.log("d1.getFullYear",d1.getFullYear());
console.log("d1.getMonth",d1.getMonth());
console.log("d1.getDay",d1.getDay());
// console.log("Date",Date);

function Person(name,first,second,third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
    this.sum = function(){
        return "sum: "+this.first+this.second+this.third;
    }
}

Person.prototype.sum = function(){
    return "prototypeSum: "+this.first+this.second+this.third;
}

// console.log("Person()",Person());
// console.log("new Person()",new Person());

var kim2 = new Person('kim2',10,20,30);
kim2.sum = function(){
    return "kim2: "+(this.first+this.second+this.third);
}
var kim3 = new Person('kim3',20,30,40);
console.log("kim2.sum()",kim2.sum());
console.log("kim3.sum()",kim3.sum());

class People{
    constructor(name,first,second,third){
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
        console.log('constructor');
    }
    sum(){
        return this.first+this.second+this.third;
    }
}

class PeoplePlus extends People{
    constructor(name,first,second,third,fourth){
        super(name,first,second,third);
        this.fourth=fourth;
    }
    sum(){
        return 'extendsSum: '+(super.sum()+this.fourth);
    }
    avg(){
        return (this.first+this.second+this.third+this.fourth)/4;
    }
}

// People.prototype.sum = function(){
//     return 'prototypeSum: '+(this.first+this.second+this.third);
// }

var kim10 = new People('kim10',30,40,50);
console.log('kim10',kim10);
console.log('kim10.sum',kim10.sum());

var kim11 = new People('kim11',40,50,60);
kim11.sum = function(){
    return 'kim11Sum: '+(this.first+this.second+this.third);
}
console.log('kim11.sum',kim11.sum());

var kim12 = new PeoplePlus('kim12',50,60,70,80);
console.log('kim12.sum',kim12.sum());
console.log('kim12.avg',kim12.avg());

var superObj = {superVal: 'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
console.log('subObj.subVal: ',subObj.subVal);
console.log('subObj.superVal: ',subObj.superVal);
subObj.superVal ='sub';
console.log('superObj.superVal: ',superObj.superVal);
console.log('subObj.superVal: ',subObj.superVal);

kim100 = {
    name:'kim100',
    first:10, second:20,
    sum:function(){
        return this.first+this.second;
    }
}

console.log('kim100.sum(): ',kim100.sum());

// kim101.__proto__ = kim100;
kim101 = {
    name: 'kim101',
    first:20, second:30,
    avg:function(){
        return (this.first+this.second)/2;
    }
}
kim101.__proto__ = kim100;

console.log('kim101.sum(): ',kim101.sum());
console.log('kim101.avg(): ',kim101.avg());

kim102 = Object.create(kim100);
kim102.name='kim102';
kim102.first=30;
kim102.second=40;
kim102.avg=function(){
    return (this.first+this.second)/2;
}

console.log('kim102.sum(): ',kim102.sum());
console.log('kim102.avg(): ',kim102.avg());

var kim200={name:'kim200', first:10, second:20};
var kim201={name:'kim201', first:20, second:30};
kim201.__proto__=kim200;
function sum(prefix){
    return prefix+(this.first+this.second);
}

console.log('sum.call(kim200)',sum.call(kim200, ': '));
console.log('sum.call(kim201)',sum.call(kim201, ': '));

var kim200Sum = sum.bind(kim200,':');
console.log('kim200Sum()',kim200Sum());

function Person100(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
}

Person100.prototype.sum = function(){
    return this.first+this.second;
}

function Person100Plus(name, first,second,third){
    Person100.call(this,name,first,second);
    this.third=third;
}

// Person100Plus.prototype.__proto__=Person100.prototype;
Person100Plus.prototype=Object.create(Person100.prototype);
Person100Plus.prototype.constructor=Person100Plus;
Person100Plus.prototype.avg=function(){
    return (this.first+this.second+this.third)/3;
}

var kim500 = new Person100Plus('kim500',10,20,30);
console.log('kim500.sum(): ',kim500.sum());
console.log('kim500.avg(): ',kim500.avg());
console.log('kim500.constructor: ',kim500.constructor);

const add = (a,b) =>{
    return a+b;
}

console.log(add(2,3));

const square = x => x*x;

console.log(square(5));

const multiply = (a,b) => a*b;

console.log(multiply(2,3));

const hi = () => console.log("hi");

hi();

function arrowFunction(){
    this.first = 1;
    this.plusOne=() => this.first+1;
}

const arrowFunctionObject = new arrowFunction();
console.log('arrowFunctionObject.first: ',arrowFunctionObject.first);
console.log('arrowFunctionObject.plusOne: ',arrowFunctionObject.plusOne());

var v=1;
console.log('v: ',v);
v=2;
console.log('v: ',v);

const c=1;
console.log('c: ',c);
// c=2;
console.log('c: ',c);

var v1 = 1;
var v2 = 1;
console.log(v1,v2,v1===v2);

var o1 = {name:'kim'}
var o2 = {name:'kim'}
console.log(o1,o2,o1===o2);

var o3 = Object.assign({},o1);
o3.name='lee';
console.log(o1,o3,o1===o3);

var o4 = {name: 'kim', score: [1,2]}
var o5 = Object.assign({},o4);
o5.score = o5.score.concat();
o5.score.push(3);
console.log(o4,o5,o4===o5,o4.score===o5.score);

function fn(person){
    person=Object.assign({},person);
    person.name='lee';
    return person;
}

var o6 = {name:'kim'};
var o7 = fn(o6);
console.log(o6,o7);

words=['spray','limit','elite','exuberant','destruction','present'];
newWords=words.filter(element=>element.length>6);
console.log(newWords);

const typeNull = null;
const typeUndefined = undefined;
let something;
console.log('typeNull: ',typeNull);
console.log('typeUndefined: ',typeUndefined);
console.log('something: ', something);
console.log('typeUndefined===something: ', typeUndefined===something);
something = 123;
console.log('something: ', something);
const anything = 0;
console.log('anything: ', anything);
// anything = something;
// anything = 456;
console.log('anything: ', anything);
const typeConst = {
    first:1,
    second:2
}
console.log('typeConst: ', typeConst);
typeConst.first=2;
console.log('typeConst: ', typeConst);
const typeConst2 = ['first','second'];
console.log('typeConst2: ', typeConst2);
typeConst2.push('third');
console.log('typeConst2: ', typeConst2);
typeConst2.pop();
console.log('typeConst2: ', typeConst2);
const typeConst3 = ['first','second',];
console.log('typeConst3: ', typeConst3);
const typeConst4 = ['first','second',,];
console.log('typeConst4: ', typeConst4);

const mon = 'mon';
const tue = 'tue';
const wed = 'wed';

const days = [mon , tue , wed];

console.log('days: ', days);

// console.log();
// function name(params) {
    
// }
// class name {
//     constructor(parameters) {
        
//     }
// }

const calculator = {
    add: function(a,b) {
        return a+b;
    },
    minus: (a,b) => a-b
}

console.log(calculator.add(1,2));
console.log(calculator.minus(2,1));

const grab = document.getElementById("grab");

console.dir(grab);

grab.innerText = "got you!";
