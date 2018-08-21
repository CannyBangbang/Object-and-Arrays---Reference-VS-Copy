// Stings, Numbers, and Booleans

let age = 100;
let age2 = age;
console.log(age, age2); // results in "100 100"
age = 200;
console.log(age, age2); // now results in "200 100" ...notice that age2 did not change as it was already set

let name = 'Brock';
let name2 = name;
console.log(name, name2); //results in "Brock Brock"
name = 'Bob';
console.log(name, name2); //results in "Bob Brock" ...notice that name2 did not change as it was already set

// Arrays
const players = ['Brock', 'Bob', 'Bigby', 'Beth'];
const team = players;
console.log(players, team);
team[3] = 'Carl';
console.log(team); // as expected result is [ 'Brock', 'Bob', 'Bigby', 'Carl' ]
console.log(players); // not as expected, the orginal array was also updated to [ 'Brock', 'Bob', 'Bigby', 'Carl' ]

const team2 = players.slice(); // as i know this is a work around. slice(when not taking any parameters) just makes a copy of the orginal array so the orginal is not altered
const team3 = [].concat(players); // another work around, merge blank array with the orginal array
const team4 = [...players]; // another work around, spread the orginal array into a new array
const team5 = Array.from(players); // another work around, i like the obvious syntax on this

// Objects
const person = {
  name: 'Brock Lubecker',
  age: 12,
};

const king = person;
king.number = 99;
console.log(person); // results in { name: 'Brock Lubecker', age: 12, number: 99 }, notice that updating king updated person

const king2 = Object.assign({}, person, { number: 22 }); // this is the workaround, in the future there may be a spread operator for objects! it would look like {...person}

console.log(king2); // reults in { name: 'Brock Lubecker', age: 12, number: 22 }
console.log(person); // results in { name: 'Brock Lubecker', age: 12, number: 99 }, notice how the orginal object was not changed

// object depth clarification

const person2 = {
  name: 'Brock Lubecker',
  age: 12,
  favs: {
    color: 'black',
    food: 'bread',
  },
};
const lord = Object.assign({}, person2); // again, this just copies the object
console.log(lord);
lord.name = 'Brocklee';
console.log(lord); // results in the below object, name updated
// { name: 'Brocklee',
// age: 12,
// favs: { color: 'black', food: 'bread' } }
console.log(person2); // results in the below object, orginal object name remains
// { name: 'Brock Lubecker',
//  age: 12,
//  favs: { color: 'black', food: 'bread' } }

lord.favs.color = 'pink';
console.log(lord);
console.log(person2);
// both of the above result in the fav color on the orginal and cloned(1 level deep only) object becoming 'pink'
// the object assign method only copies one level deep. If you need to clone the object and all nested parts you can locate a "clone deep" function.
// But there should not be many reasons to use such function

const deepClone = JSON.parse(JSON.stringify(person2)); // poor mans deep clone Wes mentioned. it converts to string then instantly parses back to object.
