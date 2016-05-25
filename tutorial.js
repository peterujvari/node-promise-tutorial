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
  return new Promise((resolve) => {
    if (_time > 8) {
      setTimeout(() => {
        console.log('Getting up')
        resolve(true)
      }, 1000);
    } else {
      // TODO: reject
      setTimeout(() => {
        console.log('Sleeping through')
        resolve(false)
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
  return new Promise((resolve) => {
    // TODO: reject if not
    setTimeout(() => {
      console.log('I have toothpaste: ' + (haveToothpaste ? 'yes' : 'no'));
      resolve(haveToothpaste)
    }, 1000);
  });
}

function brushTeeth() {
  return new Promise(() => {
    console.log('Brushing my teeth');
  });
}

function sayWhy() {
  return new Promise(() => {
    console.log('Whyyyyyy?');
  });
}

wakeUp();

whatsTheTime()
  .then((_time) => {
    return getUp(_time)
  })
  .then((success) => {
    if (!success) {
      sleep();
    } else {
      haveAnyToothpaste()
        .then((success) => {
          if (!success) {
            sayWhy()
          } else {
            brushTeeth()
          }
        });
    }
  })

// whatsTheTime()
//   .then(getUp)
//   .then((success) => {
//     if (!success) {
//       return sleep().then(p.cancel)
//     }
//   })
//   .then(haveAnyToothpaste)
//   .then((success) => {
//     if (!success) {
//       sayWhy()
//     } else {
//       brushTeeth()
//     }
//   });


console.log('START OR END')