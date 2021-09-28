const maxStringValue = 140;
const testString = 'test string for my code';

function testingString(max, string) {
  return string.length <= max;
}
testingString(maxStringValue, testString);

function randomint(randomMinValue, randomMaxValue) {
  randomMinValue >= randomMaxValue ? randomMinValue = randomMaxValue - 1 : false;

  if(((Math.sign(randomMinValue) !== -1) && (Math.sign(randomMinValue) !== -1))) {
    return Math.floor(Math.random() * (randomMaxValue - randomMinValue + 1)) + randomMinValue;
  }
}
randomint(40, 40);
