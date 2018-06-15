/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
  var hashTags = tweet.split(' ')
    .filter(function(w) {
      return w.indexOf('#') !== -1;
    })
    .map(function(h) {
      return h.slice(1);
    })

  return hashTags;
};
