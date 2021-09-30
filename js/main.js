const MAXSTRINGVALUE = 140;
const TESTSTRING = 'test string for my code';

function testString(max, string) {
  return string.length <= max;
}
testString(MAXSTRINGVALUE, TESTSTRING);

function getRandomInt(randomMinValue, randomMaxValue) {
  randomMinValue >= randomMaxValue ? randomMinValue = randomMaxValue - 1 : false;

  if(((Math.sign(randomMinValue) !== -1) && (Math.sign(randomMinValue) !== -1))) {
    return Math.floor(Math.random() * (randomMaxValue - randomMinValue + 1)) + randomMinValue;
  }
}
console.log(getRandomInt(-50, 40));
