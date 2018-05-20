const mkt = require('mortalkombat');
const _ = require('lodash');

exports.getRandomNames = (num) => {
  let randomNames = _.times(num, () => mkt.get());
  return randomNames;
}
