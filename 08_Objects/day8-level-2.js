const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },


}

//Exercise 1
//Find the person who has many skills in the users object.

let maxi = 0;
let mostSkilledPerson;

for (const entry of Object.entries(users)) {
  if (entry[1].skills.length > maxi) {
    maxi = entry[1].skills.length;
    mostSkilledPerson = entry[0];
  }
}
console.log(mostSkilledPerson);

//Alternative solution
let max = 0;
let skilledPerson;

for(const user of Object.keys(users)) {
   if(users[user].skills.length > max) {
      max = users[user].skills.length;
      skilledPerson = Object.assign({}, users[user]);
   }
}
console.log(skilledPerson.email, max); 

//Alternative solution
let winner;
let highest = 0;

for (const property in users) {
    if (users[property].skills.length > highest) {
        highest = users[property].skills.length;
        winner = property
    }
    
}
console.log(winner);

