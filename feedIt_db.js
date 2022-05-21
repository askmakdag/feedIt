module.exports = () => {
  const posts = require('./src/services/posts.json');
  return {posts: [...posts]};
};
