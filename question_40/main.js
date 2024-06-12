// Define the make_album fuction
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        tittle: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 varibles  with different values 
var album1 = make_album("Alishba", "Album title 1");
var album2 = make_album("Fatima", "Album title 2");
// Calling a make_album function with third parameter
var album3 = make_album("Amna", "Album title 3", 10);
// printing  the variables
console.log(album1);
console.log(album2);
console.log(album3);
