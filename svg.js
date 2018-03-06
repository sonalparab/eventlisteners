var svg = document.getElementById("drawing");
var clear = document.getElementById("clear");

var draw = function(e){
    //get the coordinates of the circle and draw it
    var xcor = e.offsetX;
    var ycor = e.offsetY;
    drawCircle(xcor,ycor);
}

var drawCircle = function(x,y){
    //draw the circle
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute('cx',x);
    c.setAttribute('cy',y);
    c.setAttribute('r','20');
    c.setAttribute('fill','red');
    c.setAttribute('stroke','black');
    c.addEventListener('click',changeColor);
    svg.appendChild(c);
}

var changeColor = function(e){
    //get the circle and change the color
    var cir = e.target;
    e.stopPropagation();
    cir.setAttribute('fill','green');
    cir.addEventListener('click',removeCircle);
}

var removeCircle = function(e){
    //get the circle and remove it
    var cir = e.target;
    e.stopPropagation();
    cir.remove();
    //randomize coordinates for new circle
    var xcor = Math.floor(Math.random() * 500);;
    var ycor = Math.floor(Math.random() * 500);
    drawCircle(xcor,ycor);
}

var clearing = function(){
    svg.innerHTML = "";
}

svg.addEventListener('click',draw);
clear.addEventListener('click',clearing);
