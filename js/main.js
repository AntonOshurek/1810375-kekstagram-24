const MAX_STRING_VALUE = 140;
const TEST_STRING_LENGTH = 'test string for my code';

function testString(max, string) {
  return string.length <= max;
}
testString(MAX_STRING_VALUE, TEST_STRING_LENGTH);

function getRandomInt(minValue, maxValue) {
  if (minValue >= maxValue) {
    return new Error('minValue of getRandomInt function') ;
  }

  if((Math.sign(minValue) === -1) || (Math.sign(maxValue) === -1) || (isNaN(minValue)) || (isNaN(maxValue)) || (typeof(minValue) === 'string') || (typeof(maxValue) === 'string')) {
    return new Error('minValue or maxValue they have the wrong value') ;
  } else {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
}
(getRandomInt(40, 41));
