// Define the function to show magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicians_name = ["Harry poter", "Alishba", "Musfirha"];
// Making a copy of Original array through .slice() function
var copy_magician_names = magicians_name.slice();
// Modify the copied array to inculde "The Great"with their names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays Original and Copied
show_magicians(magicians_name);
// Original
console.log("Orginal Array\n");
show_magicians(magicians_name);
//Copied
show_magicians(copy_great_magicians);
