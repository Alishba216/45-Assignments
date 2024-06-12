// Creating a Guest List Array
var guestList = ["Farwha", "Musfirha", "Fatima", "Amna"];
// Making variable for those guestbwho cant come 
var dontCome = guestList[0];
// Print the name of guest who cant come 
console.log(dontCome, "Naii Ahh skati han");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Alishba");
// Message Print for Bigger Table 
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new at starting index of array 
guestList.unshift("Safa");
// Adding anew value at ending index of array
guestList.push("Hadiya");
// Add new guest at middle index of array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Dua");
// Print message of Updated List
console.log("Update List of our Guests");
// Sending a invitation message to our guests one by one thier names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two guests can be invited dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
// Using while.loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitations to the last two guest on the list 
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List", guestList);
