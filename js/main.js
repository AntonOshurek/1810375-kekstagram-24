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

const getUniqueId = () => (Date.now().toString(36) + Math.random().toString(36).substr(2, 6));

const userComentsText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const usersNames = ['Abraham', 'Addison', 'Adrian', 'Albert', 'Alec', 'Alfred', 'Alvin', 'Andrew',
  'Andy', 'Archibald', 'Archie', 'Arlo', 'Arthur', 'Arthur', 'Austen', 'Barnabe', 'Bartholomew', 'Bertram',
  'Bramwell', 'Byam', 'Cardew', 'Chad', 'Chance', 'Colin', 'Coloman', 'Curtis', 'Cuthbert', 'Daniel', 'Darryl',
  'David', 'Dickon', 'Donald', 'Dougie', 'Douglas', 'Earl', 'Ebenezer', 'Edgar', 'Edmund', 'Edward', 'Edwin', 'Elliot',
  'Emil', 'Floyd', 'Franklin', 'Frederick', 'Gabrie', 'Galton', 'Gareth', 'George', 'Gerard', 'Gilbert', 'Gorden', 'Gordon',
  'Graham', 'Grant', 'Henry', 'Hervey', 'Hudson', 'Hugh', 'Ian', 'Jack', 'Jaime', 'James', 'Jason', 'Jeffrey', 'Joey', 'John',
  'Jolyon', 'Jonas', 'Joseph', 'Joshua', 'Julian', 'Justin', 'Kurt', 'Lanny', 'Larry', 'Laurence', 'Lawton', 'Lester', 'Malcolm',
  'Marcus', 'Mark', 'Marshall', 'Martin', 'Marvin', 'Matt', 'Maximilian', 'Michael', 'Miles', 'Murray', 'Myron', 'Nate', 'Nathan',
  'Neil', 'Nicholas', 'Nicolas', 'Norman', 'Oliver', 'Oscar', 'Osric', 'Owen', 'Patrick', 'Paul', 'Peleg', 'Philip', 'Phillipps',
  'Raymond', 'Reginald', 'Rhys', 'Richard', 'Robert', 'Roderick', 'Rodger', 'Roger', 'Ronald', 'Rowland', 'Rufus', 'Russell',
  'Sebastian', 'Shahaf', 'Simon', 'Stephen', 'Swaine', 'Thomas', 'Tobias', 'Travis', 'Victor', 'Vincent', 'Vincent', 'Vivian', 'Wayne',
  'Wilfred', 'William', 'Winston', 'Zadoc',
];

const description = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Integer vel dapibus leo, ut suscipit lectus. Maecenas quis dictum ',
  'erat. Fusce accumsan est nec enim imperdiet, nec aliquam erat bibendum.',
  'Pellentesque ac metus ac nisi tempus dictum. Quisque non ipsum id libero p',
  'lacerat congue. Phasellus id aliquet mi. Ut laoreet auctor tincidunt. Quisque ',
  'vel fermentum erat. Proin dignissim felis nulla, non ornare neque ornare ac.',
  'Sed lorem urna, condimentum id elit non, bibendum ultrices sem. Proin mollis',
  'tempor ligula ac luctus. Sed purus dui, vestibulum a tempor vitae,',
  'condimentum at mauris. Proin in tortor neque. Praesent',
  ' nec cursus purus. Vivamus id accumsan elit. Maecenas eu feugiat',
  'libero, non venenatis sapien.',
];

const postsList = [];

const getComments = (user) => {
  const userComments = [];
  for(let i = 0; i < getRandomInt(1, 8); i++) {
    const userComment = {
      id: `user${user}${getUniqueId()}`,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: userComentsText[getRandomInt(0, userComentsText.length - 1)],
      name: usersNames[getRandomInt(0, usersNames.length - 1)],
    };

    userComments.push(userComment);
  }
  return userComments;
};

for (let i = 0; i < 25; i++) {
  const userpost = {
    id: i + 1,
    url: `photos/${i+1}.jpg`,
    description: `${description[getRandomInt(0, description.length)]}`,
    likes: getRandomInt(15, 200),
    comments: getComments(i),
  };
  postsList.push(userpost);
}

console.log(postsList);
