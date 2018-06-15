/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
  var uniqueHashtags = hashtags.reduce(function(acc, item) {
    if (acc.indexOf(item.toLowerCase()) === -1) {
      acc.push(item.toLowerCase());
    }

    return acc;
  }, [])

  return uniqueHashtags.join(', ');
};
