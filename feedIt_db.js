module.exports = () => {
  const posts = require('./src/services/db/posts.json');
  const profiles = require('./src/services/db/profiles.json');
  return {posts: [...posts], profiles: [...profiles]};
};
