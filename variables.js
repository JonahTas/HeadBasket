var circleColor = 'white'
var [WIDTH, HEIGHT, W, H] = [1000, 600, 1000, 600]
let playerR = 30;
let ballR = 30;
let pause = false;
let NUMBALLS = 7;
let SPRING = 0.3;
let GRAVITY = 0.25;
let FRICTION = -0.7;
let balls = [];

//---------------------------------------------------------------//
var start, settings;               //Buttons

let sliderMusic, sliderSound;    
var valMusic = 100;
var valSound = 100;//Sliders

var scoreP1 = 0;           //scores
var scoreP2 = 0;
var countedP1 = false;
var countedP2 = false;

