let xAtor = 20;
let yAtor = 350;
let velAtor = 5;

function mostraAtor(){
    //image(imagemAtor, xAtor,yAtor, 30, 30)
    rect(xAtor, yAtor, 30, 30)
    fill(30,255,0);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        if(podeMoverI(yAtor)){
            yAtor -=velAtor;}}
    if (keyIsDown(DOWN_ARROW)){
        if(podeMoverB(yAtor)){
            yAtor +=velAtor;}}
    if (keyIsDown(LEFT_ARROW)){
        if(podeMoverI(xAtor)){
            xAtor -=velAtor;}}
    if (keyIsDown(RIGHT_ARROW)){
        if(podeMoverD(xAtor)){
            xAtor +=velAtor;}}

}

function podeMoverD(x){
    return x < 570;
}

function podeMoverI(x){
    return x > 0;
}

function podeMoverB(x){
    return x < 370;
}

