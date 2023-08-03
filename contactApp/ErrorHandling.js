let e = new Error("Errorrrr!");
console.log(e);               // Error : Errorrrr!
console.log(e.message);       // Errorrrr!
console.log(e.name);          // Error
e.name= "Susminder error";   
console.log(e.name);          // Susminder error
console.log(e.stack);         // Error : Errorrrr!

updateContactInfo(contactID,contactInfoID,parameter,newValue){
    try{
        if(this.isAdmin){
            throw new Error("Admin cannot update contacts");
        }
        if(typeof contactID!='number'){
            return "Invalid contactID passed!";
        }
        if(typeof contactInfoID!='number'){
            return "Invalid contactID passed!";
        }
        let[indexOfContact,isContact]=this.findContact(contactID)
        if(!isContact){return "Contact not found. Contact does not exist";}
        return this.contacts[indexOfContact].updateContactInfo(contactInfoID,parameter,newValue)
    }
    catch(e){
        console.log(e);

    }
}
