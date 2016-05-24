/*

Callback pattern:

function callback(err, result) {
  if (err) {
    throw err;
  }

  doSomethingWithTheResult(result)
}

*/

const theTime = 9;
const haveToothpaste = false;

function wakeUp() {
  console.log('Waking up')
}

function whatsTheTime(cb) {
  console.log('The time is ' + theTime)
  cb(null, theTime)
}

function getUp(_time, cb) {
  if (_time > 8) {
    console.log('Getting up')
    cb(null, true)
  } else {
    console.log('Sleeping through')
    cb('It\'s too early to get up', null)
  }
}

function sleep() {
  console.log('Sleeping...')
}

function haveAnyToothpaste(cb) {
  console.log('I have toothpaste: ' + (haveToothpaste ? 'yes' : 'no'));
  cb(null, haveToothpaste);
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
  })
});

console.log('START OR END')