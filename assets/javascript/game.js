$(document).ready(function (){
    //global variables
    let wins = 0;
    let losses = 0;
    let score =0;
    $('#scoreTotal').text(score)

    // allows computer to pick randmon number from 19-120
    let randmonNumber = Math.floor(Math.random() * (120-19)) + 19;
    $('#cNumber').text(randmonNumber);
    console.log(randmonNumber);

    //array for each crtal buttom values at random from 1-12
    let crystalValues = {};
    crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
    crystalValues[4] = Math.floor(Math.random()*12+1);
    console.log(crystalValues);

    //reset after a win or loss 
    function reset () {
        randmonNumber = Math.floor(Math.random() * (120-19)) + 19;
        $('#cNumber').text(randmonNumber);
        score = 0;
        crystalValues = [];
    };

    //functio for getting the computer number
    function wins () {
        wins++;
        $("#wins").html("Wins: " + wins);
        reset();
    };

    //function for not getting the computer number 
    function losses () {
        losses++;
        $("#losses").html("Losses: " + losses);
        reset();
    };

    //allowing each crystal click to have a value and add to computer number for win or loss
    $('.crystal-btn').on("click", function(){
        let crystalValue = parseInt($(this).val());
        score += crystalValue;
        console.log(score);
        $("#scoreTotal").html(score);
        if (score === randmonNumber) {
            wins();
        }
        else if (score > randmonNumber) {
            losses();
        };
    };









})