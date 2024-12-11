// variable definition
let a: string = "Saurabh";

// let b: [] = [1,2,"Saurabh"];




// Object definition of object 
type User = {
    name: string;
    role: string;
    age?: number;
}

const user = {
    name: "Saurabh",
    role: "SDE-1"
}

// interface for object blueprint

interface Book {
    bookName: String;
    price: number;
    isAvailable: boolean;
    married?: boolean
}

const user2 : User ={
    name: "Saurabh",
    role: "student",
    age: 24
} 

const book: Book = {
    bookName : "Python",
    price : 123,
    isAvailable : true,
}

type EvenNumber = number;

const nums: EvenNumber = 22;
