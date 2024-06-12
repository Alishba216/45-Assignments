// Array of current Users
let current_users = ["Alishba", "Fatima","Farwha", "Amna", "Musfirha",]

// Array of New Users 
let new_users = ["Safa", "Hadiya", "Dua", "Momina", "Aliza",]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {
    
// Making a Condition for username already exist and save in our_condition variable  
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

   // Print Different messages using If_Else statment 
    if(our_condition){
    console.log(`sorry ${new_one_user} is already taken!`)
  }else{
       console.log(`This Username ${new_one_user} is available`)
  }
} )
