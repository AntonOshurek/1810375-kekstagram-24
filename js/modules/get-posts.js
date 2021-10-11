export default function createPosts() {
  const USER_COMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
    'В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  const USER_NAMES = ['Abraham', 'Addison', 'Adrian', 'Albert', 'Alec', 'Alfred', 'Alvin', 'Andrew',
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

  const DESCRIPTIONS = [
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

  const getComments = (user) => {
    const userComents = [];
    for(let it = 0; it < getRandomInt(1, 8); it++) {
      userComents.push({
        id: `user${user}${getUniqueId()}`,
        avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
        message: `${USER_COMENTS[getRandomInt(0, USER_COMENTS.length - 1)]} ${USER_COMENTS[getRandomInt(0, USER_COMENTS.length - 1)]}`,
        name: USER_NAMES[getRandomInt(0, USER_NAMES.length - 1)],
      });
    }
    return userComents;
  };

  const NUMBER_OF_POSTS = 25;

  const generatePosts = () => {
    const postList = [];

    for (let it = 0; it < NUMBER_OF_POSTS; it++) {
      postList.push( {
        id: it + 1,
        url: `photos/${it+1}.jpg`,
        description: `${DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length)]}`,
        likes: getRandomInt(15, 200),
        comments: getComments(it),
      });
    }
    return postList;
  };

  generatePosts();

}
