export default function testString() {
  const MAX_STRING_VALUE = 140;
  const TEST_STRING = 'test string for my code';

  const testStringLength = (max, string) => string.length <= max;

  testStringLength(MAX_STRING_VALUE, TEST_STRING);
}
