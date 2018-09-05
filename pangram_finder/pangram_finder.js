const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  let pangram = true
  this.alphabet.forEach(letter => {
    if (!this.phrase.toLowerCase().includes(letter)) {
      pangram = false
    }
  })
  return pangram
}

module.exports = PangramFinder;
