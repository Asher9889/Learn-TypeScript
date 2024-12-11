interface HasAge{
    age: number;
}

interface Player{
    name: string;
    age: number;
}

// function getOldest(people : HasAge[]){
//     const oldestPerson : HasAge = people.sort((a,b)=> b.age - a.age)[0] //sort will return array after [0] it is a HasAge type data
//     return oldestPerson;
// }

function getOldest <T extends HasAge>(people: HasAge[]) : T{
    const oldestPerson : HasAge = people.sort((a,b)=> b.age - a.age)[0] //sort will return array after [0] it is a HasAge type data
    return oldestPerson as T ;
}

const player : Player[] = [
    {name: "Saurabh", age: 24},
    {name: "Shubham", age: 26},
    {name: "Sharad", age: 25},
] 

const oldestPlayer = getOldest(player)
console.log(oldestPlayer)
// const oldestPlayer = getOldest(player) ;

// Using as is called Assertion. Doing it is not a good practise
//  We can use Generics


