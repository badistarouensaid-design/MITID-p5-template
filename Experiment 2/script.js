

let rows = 40;
let cols = 40;
let diameter = 15;
let padding = 20;

// Permet de définir le temps de l'onde
let t = 0;
//Permettent définir la latence entre le curseur et le centre de l'onde
let cx = 325;
let cy = 325;
// wavecolor est la variable pour changer la vague de couleur
let waweColor;




function setup(){
    // function that runs only once
    createCanvas(650, 650);
    waweColor = color(230, 0, 0);

}

function draw(){
    // function that runs repeatedly
    background(0);
    let cellW = (width - padding * 2) / cols;
    let cellH = (height - padding * 2) / rows;
    cx = lerp(cx,mouseX, 0.10);
    cy = lerp(cy,mouseY,0.10);

    for (let i = 0; i < cols; i ++) {
        for(let j = 0; j< rows; j++){
            let x = i *cellW + cellW / 2 + padding;
            let y = j *cellH + cellH / 2 + padding;
        
            //variable qui permet de définir la distance entre l'onde et l'épicentre 
            let d = dist(x,y,cx, cy);
            //variable qui permet de définir le suivi de l'épicentre sur la souris
            let value = sin(d*0.05 - t);
            // Définit la taille des cercles entre 0 et 15 px 
            let size =abs(value)* diameter;

            //
            if(value<0)fill(waweColor);
            else fill(255);

            ellipse(x,y,size);

        }
    } 
    t += 0.03;


}
// fonction pour définir qu'à chaque clique, l'onde change de couleur
function mousePressed(){
    waweColor = color(random(255), random(255),random(255));



    









}


