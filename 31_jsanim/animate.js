var c = document.getElementById("playground") // get canvas
var dotButton = document.getElementById("buttonCircle")// Get Dot button
var stopbutton = document.getElementById("buttonStop")// Get stop button

// instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

ctx.fillStyle = 'turquoise'

var requestID; // init global var for use with animation frames

var clear = (e) => {

};

var radius = 0;
var growing = true; 

var drawDot = () => {
    /*
    Wipe the canvas, 
    Repaint the circle, 


    ... and somewhere (where/when is the right time?)
    Update requestID to propagate the animation. 
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()
    */
   growing = true;
   ctx.clearRect(0,0,c.width,c.height)

   if(growing){
    window.requestAniamtionFrame();
    ctx.beginPath()
    ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI, false) 
    ctx.fill()
    if(radius <= c.width/2){
        radius += 0.1   
     }
     else{
        radius -= 0.1 
    }
   }

};

//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...")
    console.log(requestID);    

    /* Your code here 
    ... to stop the animation
    You will need window.cancelAnimationFrame()
    */
   growing = false;
    window.cancelAnimationFrame()
};

dotButton.addEventListener("click", drawDot);
stopbutton.addEventListener("click", stopIt);