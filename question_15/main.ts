let guestlist = ["Farwha", "Musfirha", "Amna", "Fatima"];

let dontCome =guestlist[0]

console.log(dontCome, "Nai Ahh sktai");

guestlist.splice(0,1, "Alishba");

guestlist.forEach(guest => console.log(`sALAM ${guest}, would u like to Dinner with me?`));