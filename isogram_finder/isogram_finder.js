const IsogramFinder = function (word) {
  this.word = word;
}

// An isogram is a logological term for a word or phrase without
// a repeating letter. It is also used by some to mean a word or
// phrase in which each letter appears the same number of times,
// not necessarily just once.

IsogramFinder.prototype.isIsogram = function () {
  let result = true
  let letterFound = {}
  let letters = this.word.toUpperCase().split('');
  letters.forEach(letter => {
    if (!letterFound[letter]) {
      letterFound[letter] = true;
    }
    else {
      finalResult = false;
      letterFound[letter] = false;
    }
  })
  return result;
}

module.exports = IsogramFinder;
