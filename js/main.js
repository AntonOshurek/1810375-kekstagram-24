import testString from './modules/test-string.js';
import getRandom from './modules/random-int.js';
import createPosts from './modules/get-posts';

window.addEventListener('DOMContentLoaded', () => {
  testString();
  getRandom();
  createPosts();
});
