var vocab = new spanishVocab();
var vocabList = vocab.verbs;

function getRandomWord() {
    var index = getRandomInt(0, vocabList.length - 1);
    return vocabList[index];
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AppViewModel() {
    var currWord = getRandomWord();
    var isSpanish = true;
    this.cardWord = ko.observable(currWord.spanish());
    this.toggleCardWord = function() {
        if(isSpanish) {
            this.cardWord(currWord.english());
            isSpanish = false;
        }
        else {
            this.cardWord(currWord.spanish());
            isSpanish = true;
        }
    }
    this.nextWord = function() {
        currWord = getRandomWord();
        isSpanish = true;
        this.cardWord(currWord.spanish());
    }
}

ko.applyBindings(new AppViewModel());
