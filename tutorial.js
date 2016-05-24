/*

Callback async:

setTimeout(fn, 0);

setTimeout(function(){
  console.log('Async echo...');
}, 0);

*/

const theTime = 9;
const haveToothpaste = false;

function wakeUp() {
  console.log('Waking up')
}

function whatsTheTime(cb) {
  console.log('The time is ' + theTime)
  setTimeout(() => cb(null, theTime), 1000);
}

function getUp(_time, cb) {
  if (_time > 8) {
    console.log('Getting up')
    setTimeout(() => cb(null, true), 1000);
  } else {
    console.log('Sleeping through')
    setTimeout(() => cb('It\'s too early to get up', null), 1000);
  }
}

function sleep() {
  console.log('Sleeping...')
}

function haveAnyToothpaste(cb) {
  console.log('I have toothpaste: ' + (haveToothpaste ? 'yes' : 'no'));
  setTimeout(() => cb(!haveToothpaste, haveToothpaste), 1000);
}

function brushTeeth() {
  console.log('Brushing my teeth');
}

function sayWhy() {
  console.log('Whyyyyyy?');
}

wakeUp();

whatsTheTime((err, _time) => {
  getUp(_time, (err, success) => {
    if (err) {
      sleep();
    } else {
      haveAnyToothpaste((err, success) => {
        if (err) {
          sayWhy();
        } else {
          brushTeeth()
        }
      });
    }
  });
});

console.log('START OR END')