var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of Countries and Print its Original Order
var countriesTovisit = ["london", "America", "Saudia", "Dubai,"];
console.log("Original Order:", countriesTovisit);
// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
// Show that the array is still in its Orginal order
console.log("Still in Original Order:", countriesTovisit);
// Print the Array in Reversed Order without modifying the Actual Array List 
console.log("Reversed Order:", __spreadArray([], countriesTovisit, true).reverse());
// Show that the array is still in its Orginal order
console.log("Still in Original Order:", countriesTovisit);
// we have changed the Original Array Order Now
console.log("Orginal Array Reversed:", countriesTovisit.reverse());
// Print the array to show that it's back to its original order
console.log("Back to Orginal order:", countriesTovisit.reverse());
//Print the array to show that its order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());
// we have Changed again the Original Array  Order Now in reverse order again 
console.log("Orginal Array Reversed Again:", countriesTovisit.reverse());
