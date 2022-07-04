
function blastoffTimerV2(){
    // This line prints to the console on the browser only. 
    console.log("blastoffTimerV2() started");
    var countdownTimer = 10;
    // We had around 72 lines of code. In order to shorten that and be more efficiant 
    // we are going to use the 'for' loop. 
    // The variable starts from zero, it is less than 10 and increments to iterate. 
    for(var i = 0; i < 10; i = i + 1){
        //The loop moves really fast, so we need to set timeout to slow it down.
        setTimeout(function(){
        console.log("countdownTimer");
        // This line attaches the for loop to the designated area in html
        // called, "countdownStatus".
        document.getElementById("countdownStatus").innerHTML = countdownTimer;
        countdownTimer = countdownTimer - 1;
        // Timer waits 1000 miliseconds to decrement. 
        }, 1000 * i)
    }
    // If we want to print anything on a specific number we need the timeout function again
    // Then it will say BlastOff at that specific time, which is the 10th second. 
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = "BlastOff!!!";
        console.log("BlastOff");
    }, 10000)

    }
    



