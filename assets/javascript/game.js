$(document).ready(function() {
    //global variables
    let wins = 0;
    let losses = 0;
    let score =0;
    $('#scoreTotal').text(score)

    // allows computer to pick randmon number from 19-120
    let randomNumber = Math.floor(Math.random() * (120-19)) + 19;
    $('#cNumber').text(randomNumber);
    console.log(randomNumber);

    //array for each crystal button values at random from 1-12
    let crystalValues = [];
    crystalValues[0] = Math.floor(Math.random()*12+1);
    crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
    console.log(crystalValues);


    //function for getting the computer number
    function win () {
        wins++;
        $("#wins").html("Wins: " + wins);
        reset();
    };

    //function for not getting the computer number 
    function loss () {
        losses++;
        $("#losses").html("Losses: " + losses);
        reset();
    };


    //eventlisteners for each gem to regester their value, for some reason i cannot get them to show in the scoreTotal
    //i had it coded before it was say 'NAN' in the console log and now i cant get it to show anything
    $('#btn1').on('click', function (){
        score = score + crystalValues[1];
        $('#scoreTotal').text(score);
            if (score === randomNumber) {
                win();
            } else if (score > randomNumber) {
                loss()
            }
        console.log(score)
    })

    $('#btn2').on('click', function (){
        score = score + crystalValues[2];
        $('#scoreTotal').text(score);
            if (score === randomNumber) {
                win();
            } else if (score > randomNumber) {
                loss()
            }
        console.log(score)
    })

    $('#btn3').on('click', function (){
        score = score + crystalValues[3];
        $('#scoreTotal').text(score);
            if (score === randomNumber) {
                win();
            } else if (score > randomNumber) {
                loss()
            }
        console.log(score)
    })

    $('#btn4').on('click', function (){
        score = score + crystalValues[4];
        $('#scoreTotal').text(score);
            if (score === randomNumber) {
                win();
            } else if (score > randomNumber) {
                loss()
            }
        console.log(score)
    })
    
    //a reset to call after each time the user wins or losses, resetting all values of gems and choosing a new computer number
    let reset = function () {
        randomNumber = Math.floor(Math.random() * (120-19)) + 19;
        console.log(randomNumber);
        $("#cNumber").text(randomNumber);
        score = 0
        $("#scoreTotal").html(score);
        crystalValues[0] = Math.floor(Math.random()*12+1);
        crystalValues[1] = Math.floor(Math.random()*12+1);
        crystalValues[2] = Math.floor(Math.random()*12+1);
        crystalValues[3] = Math.floor(Math.random()*12+1);
    };







})