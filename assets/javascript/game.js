$(document).ready(function (){
    let wins = 0;
    let losses = 0;
    let score =0;

    let randmonNumber = Math.floor(Math.random() * (120-19)) + 19;
    console.log(randmonNumber);
    $('#cNumber').text(randmonNumber);

    let crystalValues = {};
    crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
    crystalValues[4] = Math.floor(Math.random()*12+1);

    










})