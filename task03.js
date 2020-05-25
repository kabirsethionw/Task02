
var file = require('./data.json');
var count = 0;
console.log(file.userData.map(user =>{ 
    user.responsibilities.forEach((item) =>{
        if(item.search(/developer/i)>=0)
            count++;
    });
    return {name: user.name, personal: user.interests['personal'].join(", ")};}));

console.log("Total no. of developers: " +count);
// includes 