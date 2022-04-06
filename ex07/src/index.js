function myFunction(par1) {
    var lion = {
        name: "simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    }

    delete lion[par1];
    return lion;
}

console.log(myFunction("roar"));
module.exports = myFunction;