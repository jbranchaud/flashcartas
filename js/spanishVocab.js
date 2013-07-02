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
    new spanishWordPair("to attain", "conseguir"),
    new SpanishWordPair("to cook", "cocinar"),
    new SpanishWordPair("to be", "ser/estar"),
    new SpanishWordPair("to read", "leer"),
    new SpanishWordPair("to write", "escribir"),
    new SpanishWordPair("to walk", "caminar"),
    new SpanishWordPair("to swim", "nadar"),
    new SpanishWordPair("to have", "tener"),
    new SpanishWordPair("to sleep", "dormir"),
    new SpanishWordPair("to run", "correr"),
    new SpanishWordPair("to pay", "pagar"),
    new SpanishWordPair("to want", "querer"),
    new SpanishWordPair("to speak", "hablar")
];
