const ghpages = require('gh-pages');

ghpages.publish('out', (err) => {
  console.log(err);
});
