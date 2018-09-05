const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  wordList = []
  this.words.forEach(word => {
    wordList.push(word.toUpperCase());
  })
  return wordList
}

module.exports = UpperCaser;
