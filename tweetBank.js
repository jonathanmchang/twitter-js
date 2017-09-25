const _ = require('lodash');


const data = [];


function add (name, content) {
  data.push({name: name, content: content});
};

function list () {
  return _.cloneDeep(data);
};

function find (properties) {
  return _.cloneDeep(_.filter(data,properties));
};

module.exports = { add: add, list: list, find: find};

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Helen', 'Rachel', 'Jonathan', 'Dan', 'Butters', 'Ollie', 'Erica', 'Max', 'Bekah', 'Sarah', 'Bruno'];
  const fakeLasts = ['Chang', 'Jo', 'Yee', 'Ash', 'Roberts', 'Natmesnig', 'Golden', 'Day', 'Ong', 'Lee'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
}

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'amazing', 'great', 'silly', 'stupid', 'so cool', 'wonderful', 'mindblowing', 'super', 'marvelous', 'crazy'];
  return 'Fullstack Academy is' + ' ' + randArrayEl(awesome_adj) + '! The instructors are just so ' + randArrayEl(awesome_adj) + " ! #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add(getFakeName(), getFakeTweet());
};

console.log(data)


