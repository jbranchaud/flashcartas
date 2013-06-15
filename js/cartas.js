flashcards = [
    {english: "to attain", spanish: "conseguir"},
    {english: "to eat", spanish: "comer"},
    {english: "to see", spanish: "ver"}
]

function getRandomWord() {
    return flashcards[0];
}

function AppViewModel() {
    var spanish = getRandomWord().spanish;
    var english = getRandomWord().english;
    this.cardWord = spanish;
}

ko.applyBindings(new AppViewModel());
