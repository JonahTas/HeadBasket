var circleColor = 'white'
var [WIDTH, HEIGHT, W, H] = [1000, 600, 1000, 600]
let playerR = 30;
let ballR = 30;
let NUMBALLS = 7;
let SPRING = 0.3;
let GRAVITY = 0.25;
let FRICTION = -0.7;
let balls = [];
let ballRotation = 0;

//---------------------------------------------------------------//
var start, settings;                //Buttons

let sliderMusic, sliderSound;       //Sliders                

var scoreP1 = 0;                    //scores
var scoreP2 = 0;
var countedP1 = false;
var countedP2 = false;
var penaltyTimer = 2;
var canScore = true;

var keuze, keuzep1, keuzep2;        //skins
var beurt = 1;

var timer; //tijdelijk                     //timer
var timercolor = "#e6e6e6"
var gamestate