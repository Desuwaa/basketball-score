let homeScoreBtnOne = document.getElementById("score-btn-1");
let homeScoreElement = document.getElementById("starting-score");

let homeStartScore = 0;

let guestScore = 0;

function increaseHomeScore() {
    homeStartScore +=1;
    homeScoreElement.textContent = homeStartScore;

}

let homeScoreBtnTwo = document.getElementById("score-btn-2");
let homeScoreElementTwo = document.getElementById("starting-score");
let homeStartScoretwo = 0;

function homeplusTwo() {
    homeStartScore +=2;
    homeScoreElement.textContent = homeStartScore;
}

let homeScoreBtnThree = document.getElementById("score-btn-3");
let homeScoreElementThree = document.getElementById("starting-score");
let homeStartScoreThree = 0;

function homeplusThree() {
    homeStartScore +=3;
    homeScoreElement.textContent = homeStartScore;
}

let guestScoreOne = document.getElementById("guestPlusOne");
let guestScoreElOne = document.getElementById("starting-scoreGuest");
let guestone = 0;

function plusOne() {
    guestScore +=1;
    guestScoreElOne.textContent = guestScore;

}

let guestScoreTwo = document.getElementById("guestPlusTwo");
let guestScoreElTwo = document.getElementById("starting-scoreGuest");
// let guestTwo = 0;

function plusTwo() {
    guestScore +=2;
    guestScoreElTwo.textContent = guestScore;
}

let guestScoreThree = document.getElementById("guestPlusThree");
let guestScoreElThree = document.getElementById("starting-scoreGuest");
// let guestTwo = 0;

function plusThree() {
    guestScore +=3;
    guestScoreElTwo.textContent = guestScore;
}

function reset() {
    homeScoreElement.textContent = 0;
    guestScoreElOne.textContent = 0;
}
