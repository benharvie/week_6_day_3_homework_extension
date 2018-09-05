const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  //check length = word
  //downcase
  let anagramsFound = []
  let anagram = true
  letters = this.word.split('');
  console.log(this.word,letters);
  otherWords.forEach(word => {
    letters.forEach(letter => {
      if (!word.includes(letter)) {
        anagram = false
      }
    })
    if (anagram === true && anagram.length === word.length) {
      anagramsFound.push(word);
    }
  })


  return anagramsFound;
}

module.exports = AnagramFinder;
