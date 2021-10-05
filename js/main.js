const MAX_STRING_VALUE = 140;
const TEST_STRING = 'test string for my code';

const testStringLength = (max, string) => string.length <= max;

testStringLength(MAX_STRING_VALUE, TEST_STRING);

const getRandomInt = (minValue, maxValue) => {
  if((Math.sign(minValue) === -1) || (Math.sign(maxValue) === -1) || minValue >= maxValue) {
    throw new Error('minValue or maxValue they have the wrong value');
  }
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

getRandomInt(40, 45);

const getUniqueId = () => {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 6));
}
