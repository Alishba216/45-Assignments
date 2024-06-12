// Creating a Array
var userNames = ["Musfirha", "Fatima", "Farwha ", "Admin", "Amna"];
// Using ForEach Loop on Array 
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status repot?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
