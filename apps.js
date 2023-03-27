//30 Days Of JavaScript: Arrays

//Exercise: Level 1

// 1 Declare an empty array;

const emptyArray = []

// 2 Declare an array with more than 5 number of elements

const more5Than = [1, 2, 3, 4, 5];

const More5Than = ['a', 'b', 'c', 'd', 'e'];

// 3 ind the length of your array

console.log(more5Than.length);
console.log(More5Than.length);

// 4 Get the first item, the middle item and the last item of the array

console.log(more5Than[0], more5Than[2], more5Than[4]);
console.log(More5Than[0], More5Than[2], More5Than[4]);

// 5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

 const MixedDatatypes = ['a', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']
 console.log( MixedDatatypes.length);

 // 6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

 const itCompanies = ['Facebook', 'Google', 'Microsoft', 
 'Apple', 'IBM', 'Oracle', 'Amazon'];

 // 7 Print the array using console.log()

 console.log(itCompanies);

 // 8 Print the number of companies in the array

 console.log(`${itCompanies.length} количество компаний в массиве`);

 // 9 Print the first company, middle and last company

 console.log(itCompanies[0], itCompanies[3], itCompanies[6]);

 // 10 Print out each company

 for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
  }

  // 11 Change each company name to uppercase one by one and print them out
  

  for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
  }

  // 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

  let Joincompanies = itCompanies.join(' ,');
  console.log(Joincompanies);

  // 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  
 const companyToFind = itCompanies[4]
 
 if(companyToFind == 'IBM'){
    console.log(itCompanies[4]);
 } else{
    console.log('error');
 }
 

 // 14 Filter out companies which have more than one 'o' without the filter method

 let filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let j = 0; j < itCompanies[i].length; j++) {
    if (itCompanies[i][j] === 'o') {
      count++;
    }
  }
  if (count === 2) {
    filteredCompanies.push(itCompanies[i]);
  }
}
console.log(filteredCompanies);

// 15 Sort the array using sort() method
let itCompaniestext = itCompanies.sort();
console.log(itCompaniestext)

// 16 Reverse the array using reverse() method
let TextitCompanies = itCompanies.reverse();
console.log(TextitCompanies);

// 17 Slice out the first 3 companies from the array
console.log(TextitCompanies.splice(0, 3))
console.log(itCompaniestext.splice(0, 3))

// 18 Slice out the last 3 companies from the array
const itCompaniesl = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompaniesl.splice(-4);
console.log(itCompaniesl);

// 19 Slice out the middle IT company or companies from the array

const itCompaniesy = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let middleIndex = Math.floor(itCompaniesy.length / 2);
let middleCompanies = [];
if (itCompaniesy.length % 2 === 0) {
  middleCompanies.push(itCompaniesy[middleIndex - 1], itCompaniesy[middleIndex]);
} else {
  middleCompanies.push(itCompaniesy[middleIndex]);
}
console.log(middleCompanies);

// 20 Remove the first IT company from the array
itCompaniesy.shift();
console.log(itCompaniesy);
 

// 21 Remove the middle IT company or companies from the array

let middleIndexl = Math.floor(itCompaniesy.length / 2);
if (itCompaniesy.length % 2 === 0) {
  itCompaniesy.splice(middleIndexl - 1, 2);
} else {
  itCompaniesy.splice(middleIndexl, 1);
}
console.log(itCompaniesy);

// 22 Remove the last IT company from the array
itCompaniesy.pop()
 console.log(itCompaniesy);

 // 23 Remove all IT companies

 itCompaniesy.splice(0);
console.log(itCompaniesy);

// Exercise: Level 2

// 1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file


// 2 First remove all the punctuations and change the string to array and count the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);

// 3 In the following shopping cart add, remove, edit items


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart.splice(2, 1)
console.log(shoppingCart)
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)


// 4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
 
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

 if (countries.includes('Ethiopia')) {
   console.log('ETHIOPIA');
 } else {
   
   countries.push('Ethiopia');
 }

 console.log(countries.includes());

// 5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
 
const webTechs = [
   'HTML',
   'CSS',
   'JavaScript',
   'React',
   'Redux',
   'Node',
   'MongoDB'
 ]

 if (webTechs.includes('CSS')) {
   console.log('Sass - это предварительный процесс CSS');
 } else {
   
   webTechs.push('CSS');
   console.log(webTechs);
 }

 // 6 Concatenate the following two variables and store it in a fullStack variable.

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = [...frontEnd, ...backEnd]
console.log(fullStack)

// Exercise: Level 3

// 1 The following is an array of 10 students ages

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
ages.sort((a,b) => a - b)
const minAge = ages[0]
const maxAge = ages[ages.length - 1]
console.log(minAge, maxAge)

// Find the median age(one middle item or two middle items divided by two)
ages.sort((a,b) => a - b)
const middle = Math.floor(ages.length / 2)
const medianAge = ages[middle]
console.log(middle, medianAge)

//Find the average age(all items divided by number of items)
const sum = ages.reduce((total, age) => total + age)
const averageAge = sum / ages.length
console.log(sum, averageAge) 

// Find the range of the ages(max minus min)

ages.sort((a,b) => a - b)
const minAgeH = ages[0]
const maxAgeY = ages[ages.length - 1]
const ageRange = maxAgeY - minAgeH

console.log(minAgeH, maxAgeY);


// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array


const average = ages.reduce((a,b) => a + b) / ages.length;
const minMaxDiff = Math.abs(Math.max(...ages) - average) - Math.abs(Math.min(...ages) - average);

console.log(minMaxDiff);
console.log(countries.slice(0,10));


// 2 Find the middle country(ies) in the countries array

const countriesW = [
   'Afghanistan',
   'Albania',
   'Algeria',
   'Andorra',
   'Angola',
   'Antigua and Barbuda',
   'Argentina',
   'Armenia',
   'Australia',
   'Austria',
   'Azerbaijan',
   'Bahamas',
   'Bahrain',
   'Bangladesh',
   'Barbados',
   'Belarus',
   'Belgium',
   'Belize',
   'Benin',
   'Bhutan',
   'Bolivia',
   'Bosnia and Herzegovina',
   'Botswana',
   'Brazil',
   'Brunei',
   'Bulgaria',
   'Burkina Faso',
   'Burundi',
   'Cambodia',
   'Cameroon',
   'Canada',
   'Cape Verde',
   'Central African Republic',
   'Chad',
   'Chile',
   'China',
   'Colombi',
   'Comoros',
   'Congo (Brazzaville)',
   'Congo',
   'Costa Rica',
   "Cote d'Ivoire",
   'Croatia',
   'Cuba',
   'Cyprus',
   'Czech Republic',
   'Denmark',
   'Djibouti',
   'Dominica',
   'Dominican Republic',
   'East Timor (Timor Timur)',
   'Ecuador',
   'Egypt',
   'El Salvador',
   'Equatorial Guinea',
   'Eritrea',
   'Estonia',
   'Ethiopia',
   'Fiji',
   'Finland',
   'France',
   'Gabon',
   'Gambia, The',
   'Georgia',
   'Germany',
   'Ghana',
   'Greece',
   'Grenada',
   'Guatemala',
   'Guinea',
   'Guinea-Bissau',
   'Guyana',
   'Haiti',
   'Honduras',
   'Hungary',
   'Iceland',
   'India',
   'Indonesia',
   'Iran',
   'Iraq',
   'Ireland',
   'Israel',
   'Italy',
   'Jamaica',
   'Japan',
   'Jordan',
   'Kazakhstan',
   'Kenya',
   'Kiribati',
   'Korea, North',
   'Korea, South',
   'Kuwait',
   'Kyrgyzstan',
   'Laos',
   'Latvia',
   'Lebanon',
   'Lesotho',
   'Liberia',
   'Libya',
   'Liechtenstein',
   'Lithuania',
   'Luxembourg',
   'Macedonia',
   'Madagascar',
   'Malawi',
   'Malaysia',
   'Maldives',
   'Mali',
   'Malta',
   'Marshall Islands',
   'Mauritania',
   'Mauritius',
   'Mexico',
   'Micronesia',
   'Moldova',
   'Monaco',
   'Mongolia',
   'Morocco',
   'Mozambique',
   'Myanmar',
   'Namibia',
   'Nauru',
   'Nepal',
   'Netherlands',
   'New Zealand',
   'Nicaragua',
   'Niger',
   'Nigeria',
   'Norway',
   'Oman',
   'Pakistan',
   'Palau',
   'Panama',
   'Papua New Guinea',
   'Paraguay',
   'Peru',
   'Philippines',
   'Poland',
   'Portugal',
   'Qatar',
   'Romania',
   'Russia',
   'Rwanda',
   'Saint Kitts and Nevis',
   'Saint Lucia',
   'Saint Vincent',
   'Samoa',
   'San Marino',
   'Sao Tome and Principe',
   'Saudi Arabia',
   'Senegal',
   'Serbia and Montenegro',
   'Seychelles',
   'Sierra Leone',
   'Singapore',
   'Slovakia',
   'Slovenia',
   'Solomon Islands',
   'Somalia',
   'South Africa',
   'Spain',
   'Sri Lanka',
   'Sudan',
   'Suriname',
   'Swaziland',
   'Sweden',
   'Switzerland',
   'Syria',
   'Taiwan',
   'Tajikistan',
   'Tanzania',
   'Thailand',
   'Togo',
   'Tonga',
   'Trinidad and Tobago',
   'Tunisia',
   'Turkey',
   'Turkmenistan',
   'Tuvalu',
   'Uganda',
   'Ukraine',
   'United Arab Emirates',
   'United Kingdom',
   'United States',
   'Uruguay',
   'Uzbekistan',
   'Vanuatu',
   'Vatican City',
   'Venezuela',
   'Vietnam',
   'Yemen',
   'Zambia',
   'Zimbabwe'
 ]

 const foundCountry = countriesW.find(country => country === 'Denmark');
console.log(foundCountry);

// 3 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const half = Math.ceil(countriesW.length / 2);
const firstHalf = countriesW.slice(0, half);
const secondHalf = countriesW.slice(half);

console.log(firstHalf); 
console.log(secondHalf);

