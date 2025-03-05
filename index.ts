//! Objects with inferred types: 

const song = {
    title: "x",
    artist: "y"
}
song.title = "people watching"
song.artist = "Sam fender"

console.log(song)
console.log(typeof song)

//----------------------------------
// another not recommended way

// const book = {};
// book.title = "the hobbit";
// book.author = " J. J. Tolkin"

// console.log(book)
// console.log(typeof book)

//! Objects with explicit types:

let movie: {
    title: string,
    director: string
} = {
    title: " The Lord of the Rings",
    director: "Peter Jackson"
}

console.log(movie)
console.log(typeof movie)
console.log(typeof movie.title)
console.log(typeof movie.director)

//! Object with custom types:
//! Custom types with type


type Pet = {
    name: string,
    age: number
}

const cat: Pet = {
    name: "Fluffy",
    age: 2
}

console.log(cat)
console.log(typeof cat)

function petFactory(name: string, age: number): Pet{
    return {
        name: name, 
        age: age
        }
}

const dog = petFactory("Lita", 4)

console.log(dog)
console.log(typeof dog)

const horse = petFactory("shams", 12)

console.log(horse)
console.log(typeof horse)
console.log("===================================================")

const pig = petFactory("Deyverson", 43)
const sheep = petFactory("Creuza", 32)
const turtle = petFactory("Leo", 87)



let Pets = [
    { type: "cat", pet: cat },
    { type: "dog", pet: dog },
    { type: "horse", pet: horse },
    { type: "pig", pet: pig },
    { type: "sheep", pet: sheep },
    { type: "turtle", pet: turtle }
];

for (let i=0; i < Pets.length; i++){
    console.log(`Pet: ${Pets[i].type}. Name: ${Pets[i].pet.name}. Age: ${Pets[i].pet.age}`)
}

console.log("===================================================")

//! custom types with interface:

interface Animal {
    name: string,
    age: number,
    eat: Function,
    sleep: Function
}
const bird: Animal = {
    name: "Tweety",
    age: 4,
    eat : function () {console.log("num num")},
    sleep: function() {console.log("zzzzzzzzzzzzzzzz")}

}
console.log(bird)
console.log(typeof bird)

bird.eat();
bird.sleep();