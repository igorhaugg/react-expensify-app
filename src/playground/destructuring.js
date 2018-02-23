// 1) Object destructuring

// const person = {
//   name: 'Igor',
//   age: 25,
//   location: {
//     city: 'Ijui',
//     temp: 30
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperatura } = person.location;
// if (city && temperatura) {
//   console.log(`It's ${temperatura} in ${city}.`);
// }

// 2) Object destructuring

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//  3) Array destructuring

// const address = [
//   '1299 S Juniper Street',
//   'Philadelphia',
//   'Pennsylvania',
//   '19147'
// ];
//
// const [, city, state = 'New York'] = address; // só os necessários
// // const [street, city, state, zip] = address;
//
// console.log(`You are in ${city} ${state}.`);

// 4) Array destructuring

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
