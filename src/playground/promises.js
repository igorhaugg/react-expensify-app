const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      nome: 'Igor',
      age: 25
    });
  }, 1500);
});

console.log('before');

promise
  .then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is my promise');
      }, 5000);
    });
  })
  .then(str => {
    console.log('does this run?', str);
  })
  .catch(error => {
    console.log('error', error);
  });

// promise
//   .then(data => {
//     console.log(data);
//     return 'some data';
//   })
//   .then(str => {
//     console.log('does this run?', str);
//   })
//   .catch(error => {
//     console.log('error', error);
//   });

console.log('after');
