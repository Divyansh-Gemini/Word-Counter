let textArea = document.querySelector("textarea");
let charCountText = document.querySelector("#char-count");
let wordCountText = document.querySelector("#word-count");
let sentenceCountText = document.querySelector("#sentence-count");
let charText = document.querySelector("#char-text");
let wordText = document.querySelector("#word-text");
let sentenceText = document.querySelector("#sentence-text");

let text = "";
let charCount = 0;
let wordCount = 0;
let sentenceCount = 0;

textArea.addEventListener("input", function () {
    // get text from text area
    text = textArea.value;

    // get count of empty words
    let words = text.split(" ");
    let emptyWords = 0;
    for (let word of words)
        if (word.trim().length == 0)
            emptyWords++

    // get count of empty sentences
    let sentences = text.match(/[^\.!\?]+[\.!\?]*/g) || [];
    let emptySentences = 0;
    for (let sentence of sentences)
        if (sentence.trim().length == 0)
            emptySentences++

    // get count of characters, words, sentences
    charCount = text.length;
    wordCount = words.length - emptyWords;
    sentenceCount = sentences.length - emptySentences;

    // set count to elements
    charCountText.innerHTML = charCount;
    wordCountText.innerHTML = wordCount;
    sentenceCountText.innerHTML = sentenceCount;

    // add (s) is count is more are than 1
    charText.innerText = charCount > 1 ? "Characters" : "Character";
    wordText.innerText = wordCount > 1 ? "Words" : "Word";
    sentenceText.innerText = sentenceCount > 1 ? "Sentences" : "Sentence";
});