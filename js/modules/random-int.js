export default function getRandom() {
  const getRandomInt = (minValue, maxValue) => {
    if((Math.sign(minValue) === -1) || (Math.sign(maxValue) === -1) || minValue >= maxValue) {
      throw new Error('minValue or maxValue they have the wrong value');
    }
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  };

  const getUniqueId = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 6);
}
