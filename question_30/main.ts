// Creating a Array
let userNames = ["Musfirha", "Fatima", "Farwha ", "Admin", "Amna"];

// Using ForEach Loop on Array 
userNames.forEach(oneUser =>{
     if(oneUser === "Admin"){
          console.log(`Hello ${oneUser}, would you like to see a status repot?`)
     }else{
           console.log(`Hello ${oneUser}, thank you for logging in again.`)
     }
})      