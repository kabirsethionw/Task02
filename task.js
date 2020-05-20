
var alice = [50, 65, 77, 90, 102]; // dummy values
var scores = [100, 90, 90, 80, 75, 60];
function climbingLeaderboard(scores, alice) {
    var res = [];
    function innerFunction(item){
        var temp = -1 ; var count = 1;
        scores.map((val) => {
            if(item<val &&(temp!=val)){
                count++; temp = val;
            }// break can be used in native for loop if (item>=val) but that does'nt do significant optimization
        }); res.push(count); console.log(res); // check status of res at each iteration of loop 
    }
    alice.forEach((value) => {console.log(value); innerFunction(value)});
    return res;
}

climbingLeaderboard(scores, alice);

