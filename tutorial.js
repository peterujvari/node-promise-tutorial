/*

*/

const theTime = 9;
const haveToothpaste = false;

function wakeUp() {
  console.log('Waking up')
}

function whatsTheTime() {
  console.log('The time is ' + theTime)
  return theTime
}

function getUp(_time) {
  if (_time > 8) {
    console.log('Getting up')
    return true
  } else {
    console.log('Sleeping through')
    return false
  }
}

function sleep() {
  console.log('Sleeping...')
}

function haveAnyToothpaste() {
  console.log('I have toothpaste: ' + (haveToothpaste ? 'yes' : 'no'));
  return haveToothpaste;
}

function brushTeeth() {
  console.log('Brushing my teeth');
}

function sayWhy() {
  console.log('Whyyyyyy?');
}

wakeUp();

if (getUp(whatsTheTime())) {
  if (haveAnyToothpaste()) {
    brushTeeth();
  } else {
    sayWhy();
  }
} else {
  sleep();
}

console.log('START OR END')