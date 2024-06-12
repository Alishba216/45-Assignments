var guestlist = ["Farwha", "Musfirha", "Amna", "Fatima"];
var dontCome = guestlist[0];
console.log(dontCome, "Nai Ahh sktai");
guestlist.splice(0, 1, "Alishba");
guestlist.forEach(function (guest) { return console.log("sALAM ".concat(guest, ", would u like to Dinner with me?")); });
