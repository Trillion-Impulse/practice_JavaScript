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
        return 'classSum: '+(this.first+this.second+this.third);
    }
}

class PeoplePlus extends People{
    avg(){
        return (this.first+this.second+this.third)/3;
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

var kim12 = new PeoplePlus('kim12',50,60,70);
console.log('kim12.sum',kim12.sum());
console.log('kim12.avg',kim12.avg());