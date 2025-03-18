// console.log("Hello JS");
var memberArray = ['aaa', 'bbb', 'ccc'];
console.log("memberArray[0]", memberArray[0]);

var memberObject = {
    A:'aaa',
    B:'bbb',
    C:'Ccc'
}
memberObject.C = "ccc";
console.log("memberObject.C", memberObject.C);
console.log("memberObject.C", memberObject["C"]);
delete memberObject.A
console.log("after delete memberObject.A", memberObject.A);