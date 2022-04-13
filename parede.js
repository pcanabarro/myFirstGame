let xParede = [100,200,200,200,225,300,390,490,325,415,415,300,100,200,390];
let yParede = [101,220,-10,341,220,70,0,80,158,250,330,420,100,255,75];
let larguraParede = [25,25,25,25,80,25,25,25,190,190,25,25,25,25,25];
let alturaParede = [300,60,150,60,20,240,100,80,20,20,75,25,25,25,25];

function mostraParede(){
    for (i = 0; i< xParede.length; i++)
        rect(xParede[i], yParede[i], larguraParede[i], alturaParede[i]);
        fill(0,30,255)
}

//function traps(){
  //  let numTraps = [yParede[11],yParede[12],yParede[13],yParede[14]]
  //  for (i  = 0; i < numTraps.length; i++){
  //      numTraps[i] += 5 }
}
