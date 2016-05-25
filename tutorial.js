/*

*/
const Promise = require('bluebird');

const theTime = 9;
const haveToothpaste = false;

function wakeUp() {
  console.log('Waking up')
}

function whatsTheTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('The time is ' + theTime)
      resolve(theTime)
    }, 1000);
  });
}

function getUp(_time) {
  return new Promise((resolve, reject) => {
    if (_time > 8) {
      setTimeout(() => {
        console.log('Getting up')
        resolve(true)
      }, 1000);
    } else {
      setTimeout(() => {
        console.log('Sleeping through')
        reject('Error with getting up')
      }, 1000);
    }
  });
}

function sleep() {
  return new Promise(() => {
    console.log('Sleeping...')
  });
}

function haveAnyToothpaste() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('I have toothpaste: ' + (haveToothpaste ? 'yes' : 'no'));
      haveToothpaste ? resolve(true) : reject('Whyyyyy')
    }, 1000);
  });
}

function brushTeeth() {
  return new Promise(() => {
    console.log('Brushing my teeth');
  });
}

// function sayWhy() {
//   return new Promise(() => {
//     console.log('Whyyyyyy?');
//   });
// }

wakeUp();

whatsTheTime()
  .then(getUp)
  // .catch((error) => {
  //   console.log('Error but it continues: ' + error);
  // })
  .then(haveAnyToothpaste)
  .then(brushTeeth)
  .catch(console.log);


console.log('START OR END')