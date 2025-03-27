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