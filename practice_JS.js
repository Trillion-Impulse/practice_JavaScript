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