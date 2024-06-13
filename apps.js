const montage = {
    gameFace : ':D',
    readyForThis : true,
    vitorySound : 'Eye of the Tiger',
}

console.log(montage);
console.log(montage.vitorySound);

const hometown = {
    name : 'London',
    population : '8000000',
    country : { name : 'England', population : '56000000'},
}

console.log(hometown.population)
console.log(hometown.country.name)
console.log(hometown.country.population)

const character = [
    {
        name : 'John Wick',
        movie : 'John Wick',
    },{
        name : 'Thor',
        movie : 'The Avengers',
    },{
        name : 'Buzz Lightyear' ,
        movie : 'Toy Story' ,
    }
]

console.log(character[0].name)


character.forEach(element => {
    console.log(`I am ${element.name} from the move ${element.movie}`)
});


for(let char of character){
    console.log(`I am ${char.name} from the movie ${char.movie}`) 
}

for(let i = 0; i < character.length; i++){
    console.log(`I am ${character[i].name} from the movie ${character[i].movie}`)
}

const monkey = {
    name : 'Monkey',
    species : 'Mandrill',
    foodsEaten : [],
    eatSomething(food){
        this.foodsEaten.push(food);
    },
    introduce(){
        return `Hello my name is ${this.name} I am a ${this.species} which is a type of Monkey. The last thing I was was a ${this.foodsEaten[this.foodsEaten.length-1]}.`
    },
}

monkey.eatSomething('banna');

console.log(monkey)

console.log(monkey.introduce());



const laboratory = {
    monster : {},
    experiement(partName, partValue){
        laboratory.monster[partName] = partValue;
    }
}

laboratory.experiement('hair', 'red')
console.log(laboratory)