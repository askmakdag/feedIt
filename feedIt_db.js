module.exports = () => {
  const posts = require('./src/services/posts.json');
  const profiles = require('./src/services/profiles.json');
  return {posts: [...posts], profiles: [...profiles]};
};
