var pole = new Array("img/obr1.png", "img/obr2.png", "img/obr3.png", "img/obr4.png", "img/obr5.png", "img/obr6.png", "img/obr7.png", "img/obr8.png", "img/obr9.png", "img/obr10.png", "img/obr11.png");
var pointer = 0;
function next() {
    pointer++;
    if (pointer === pole.length) {
        pointer = 0;
    }
    document.getElementById("obrazek").setAttribute("src", pole[pointer]);
}
function back() {
    pointer--;
    if (pointer === -1) {
        pointer = pole.length - 1;
    }
    document.getElementById("obrazek").setAttribute("src", pole[pointer]);
}
var played = false;
var timer;
function play() {
    if (played === false) {
        played = true;
        timer = setInterval(next, 1000);
    }
    else {
        played = false;
        clearInterval(timer);

    }
}