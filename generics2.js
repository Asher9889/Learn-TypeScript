// function getOldest(people : HasAge[]){
//     const oldestPerson : HasAge = people.sort((a,b)=> b.age - a.age)[0] //sort will return array after [0] it is a HasAge type data
//     return oldestPerson;
// }
function getOldest(people) {
    var oldestPerson = people.sort(function (a, b) { return b.age - a.age; })[0]; //sort will return array after [0] it is a HasAge type data
    return oldestPerson;
}
var player = [
    { name: "Saurabh", age: 24 },
    { name: "Shubham", age: 26 },
    { name: "Sharad", age: 25 },
];
var oldestPlayer = getOldest(player);
console.log(oldestPlayer);
// const oldestPlayer = getOldest(player) ;
// Using as is called Assertion. Doing it is not a good practise
//  We can use Generics
