function wordPair(word1, word2) {
    this.word1 = word1;
    this.word2 = word2;
}

function spanishWordPair(english, spanish) {
    this.pair = new wordPair(english, spanish);
}

spanishWordPair.prototype.english = function() {
    return this.pair.word1;
};

spanishWordPair.prototype.spanish = function() {
    return this.pair.word2;
};

var spanishVocab = function(){};

spanishVocab.prototype.phrases = [
    new spanishWordPair("hello", "hola"),
    new spanishWordPair("goodbye", "adios")
];

spanishVocab.prototype.verbs = [
    new spanishWordPair("to see", "ver"),
    new spanishWordPair("to eat", "comer"),
    new spanishWordPair("to attain", "conseguir")
];
