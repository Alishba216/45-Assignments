// Define the function to show magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_name = ["Harry poter", "Alishba", "Musfirha"];
var great_magicians = make_great(magician_name);
show_magicians(great_magicians);
