

let randomButton = document.querySelector("#randomize");

randomButton.addEventListener("click", function(){
    background(73);
    generateStacks();

})


function setup(){
    // function that runs only once
    createCanvas(800, 500);
    noStroke();


    background(73);
    generateStacks(5);


}

function draw(){
    // function that runs repeatedly
   
   // stackOfcircle(100,200,"#F000E0");
   // stackOfcircle(300,400,"#F00340");

}



function generateStacks(stackAmount){
    for(let i= 0; i<10; i++){
        let randomX = random(0,800);
        let randomY = random(0,500);
        let randomColor = random(0,225);
        stackOfcircle(randomX,randomY,randomColor);

}
}

function stackOfcircle(posX,posY,color){ 
    fill(color);
    for (let i = 0; i < 10; i = i + 1){
        circle(posX,posY+i*10,20);


}
}
     
function mousePressed(){
    fill("blue");
    circle(mouseX,mouseY,50);

}
