//Exercise 1
/*let randChars = '';
for(let i = 0; i < 2; i++) {
 let random = Math.random().toString(36).substr(2, 5);
 randChars += random;
}
console.log(randChars);


//Exercise 2
let random = Math.random().toString(16).substr(2,7);
for(let i = 0; i < 1; i++) {
    let hexChars = '#';
    hexChars += random;
    console.log(hexChars);
}

//Exercise 3

for(let i = 0; i < 1; i++) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor);
}

//Exercise 4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const newCountry = [];
for(const country of countries) {
    newCountry.push(country.toUpperCase());
    console.log(newCountry);
}


//Exercise 5
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const countryLength = [];
for(const country of countries) {
    countryLength.push(country.length);
    console.log(countryLength);
} 

//Exercise 6
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const countryArray = [];
for(const country of countries) {
    let abbrv= country.slice(0,3).toUpperCase();
    let lengthOf = country.length;
    countryArray.push([country, abbrv, lengthOf]);
}

for(arr of countryArray) {
    console.log(arr);
}

*/

//Exercise 7
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const countryLand = [];
for(const country of countries) {
    if (country.indexOf('land') === -1){
        console.log('All these countries are without land');
    } else {
       countryLand.push(country);
    }
        console.log(countryLand);
}

