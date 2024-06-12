// Define the function to show magicians names 
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
     return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_name = ["Harry poter", "Alishba", "Musfirha"];


// Call make_great function to modifiy magicians names
let great_magicians = make_great(magician_name);

// Call show_magicians that show  modified list of magicians
show_magicians(great_magicians)