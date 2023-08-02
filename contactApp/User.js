const Contact = require("./Contact.js")

class User{
    static allUsers=[];
    static ID=0;
    constructor(fullName,isAdmin,gender,age){
        this.ID=User.ID++;
        this.fullName=fullName;
        this.isAdmin=isAdmin;
        this.gender=gender;
        this.age=age;
        this.contacts=[];
    }

    createUser(fullName,gender,age){
        if(!this.isAdmin){
            return "Only admin can create new user!";
        }
        if(typeof fullName!='string'){
            return "Please enter valid name";
        }
        if(typeof gender!='string'){
            return "Please enter valid gender";
        }
        if(typeof age!='number'){
            return "Please enter valid age";
        }

        let userObj=new User(fullName,false,gender,age);
        User.allUsers.push(userObj);
        return userObj;
    }

    static createAdmin(fullName,gender,age){
        if(typeof fullName!='string'){
            return "Please enter valid name";
        }
        if(typeof gender!='string' && (gender!='M' && gender!='F')){
            return "Please enter valid gender";
        }
        if(typeof age!='number'){
            return "Please enter valid age";
        }
        return new User(fullName,true,gender,age);
    }

    getAllUsers(){
        if(!this.isAdmin){
            return "Only admin can create new user!";
        }
        return User.allUsers;
    }

    static findUser(ID){
        if(typeof ID!='number'){
            return "Invalid ID passed!"
        }

        for(let index=0;index<User.allUsers.length;index++){
            if(User.allUsers[index].ID==ID){
                return [index,true];
            }
        }
        return [-1,false];
    }

    getUserByID(ID){
        if(!this.isAdmin){
            return "Only admin can get user by ID!";
        }
        if(typeof ID!='number'){
            return "Invalid ID passed!"
        }
        let [indexOfUser, isUserExist]=User.findUser(ID);
        if(!isUserExist){
            return "No user found";
        }
        return User.allUsers[indexOfUser];
    }

    updateUser(ID, parameter, updatedValue){
        if(!this.isAdmin){
            return "Only admin can create new user!";
        }
        if(typeof ID!='number'){
            return "Invalid ID passed!"
        }

        let [indexOfUser, isUserExist]=User.findUser(ID);
        if(!isUserExist){
            return "No user found";
        }
        switch(parameter){
            case "fullName" : User.allUsers[indexOfUser].fullName=updatedValue;
                              return User.allUsers[indexOfUser];
            case "gender" : User.allUsers[indexOfUser].gender=updatedValue;
                              return User.allUsers[indexOfUser];
            case "age" : User.allUsers[indexOfUser].age=updatedValue;
                              return User.allUsers[indexOfUser];
            default : return "Invalid Parameter!";                     
        }
    }

    deleteUser(ID){
        if(!this.isAdmin){
            return "Only admin can create new user!";
        }
        if(typeof ID!='number'){
            return "Invalid ID passed!"
        
        }

        let [indexOfUser, isUserExist]=User.findUser(ID);
        if(!isUserExist){
            return "No user found";
        }
        this.User.allUsers.splice(indexOfUser,1);
        return User.allUsers;
    }
    // contact methods
    createContact(contactName,country){
        if(this.isAdmin){
            return "Only user can create new contact!";
        }
        // if(typeof contactName!='string'){
        //     return "Please enter valid contact name";
        // }
        // if(typeof country!='country'){
        //     return "Please enter valid country name";
        // }
        let contactObj=new Contact(contactName,country);
        this.contacts.push(contactObj);
        return contactObj;

    }

    getAllContacts(){
        if(this.isAdmin){
            return "Only user can get all contacts!";
        }
        return this.contacts;
    }

    findContact(contactID){
        for(let index=0;index<this.contacts.length;index++){
            if(this.contacts[index].ID==contactID){
                return [index,true];
            }
        }
        return [-1,false];
    }

    getContactByID(contactID){
        if(this.isAdmin){
            return "Only user can get contact by ID!";
        }
        if(typeof contactID!='number'){
            return "Invalid ID passed!"
        }
        let [indexOfContact, isContact]=this.findContact(contactID);
        if(!isContact){
            return "No contact found";
        }
        return this.contacts[indexOfContact];
    }

    updateContact(contactID, parameter, updatedValue){
        if(this.isAdmin){
            return "Only user can update contact!";
        }
        if(typeof contactID!='number'){
            return "Invalid contactID passed!"
        }

        let [indexOfContact, isContact]=this.findContact(contactID);
        if(!isContact){
            return "No contact found.Contact does not exist";
        }
        return this.contacts[indexOfContact].updateContact(parameter,updatedValue);
    }

    deleteContact(contactID){
        if(this.isAdmin){
            return "Only user can update contact!";
        }
        if(typeof contactID!='number'){
            return "Invalid contactID passed!";
        }
        let[indexOfContact, isContact]=this.findContact(contactID);
        if(!isContact){
            return "No contact found. Contact does not exist";
        }
        this.contacts.splice(indexOfContact,1);
        return User.contacts;
    }

    //contact info methods
    createContactInfo(contactID,city,areaName){
        if(this.isAdmin){
            return "Only user can update contact!";
        }
        if(typeof city!='string'){
            return "Invalid city info!";
        }
        if(typeof areaName!='string'){
            return "Invalid area name info!";
        }
        let[indexOfContact,isContact]=this.findContact(contactID);
        if(!isContact){return "Contact not found. Contact does not exist";}
        //let contactInfoObj=new ContactInfo(typeOfContactInfo,valueOfContactInfo);
        //this.contacts[indexOfUser].contactInfos.push(contactInfoObj);
        //return contactInfoObj;

        return this.contacts[indexOfContact].createContactInfo(city,areaName);  
    }

    getContactInfo(contactID){
        if(this.isAdmin){
            return "Only user can get contact information";
        }
        let[indexOfContact,isContact]=this.findContact(contactID);
        if(!isContact){return "Contact not found. Contact does not exist";}
        return this.contacts[indexOfContact].getContactInfo();
    }

    getContactInfoByID(contactID){
        if(this.isAdmin){
            return "Only user can get contact by ID!";
        }
        if(typeof contactID!='number'){
            return "Invalid ID passed!"
        }
        let[indexOfContact,isContact]=this.findContact(contactID);
        if(!isContact){return "Contact not found. Contact does not exist";}
        return this.contacts[indexOfContact].getContactInfoByID(contactID);
    }

    updateContactInfo(contactID,parameter,newValue){
        let[indexOfContact,isContact]=this.findContact(contactID)
        if(!isContact){return "Contact not found. Contact does not exist";}
        return this.contacts[indexOfContact].updateContactInfo(contactID,parameter,newValue)
    }

    deleteContactInfo(contactID){
        if(this.isAdmin){
            return "Only user can delete contact!"
        }
        if(typeof contactID!='number'){
            return "Invalid contactID passed!"
        }
        let[indexOfContact, isContact]=this.findContact(contactID)
        if(!IsContact){return "Contact not found. Contact does not exist";}
        return this.contacts[indexOfContact].deleteContactInfo(contactID)
    }

   
}

let admin=User.createAdmin("admin","Male",22);
//console.log(adminObj)
let user1=admin.createUser("Dhruv","Male",20);
let user2=user1.createUser("abcd","Female",8);
user1.createContact("Nikul","India");
user1.createContact("Jigna","India");

user1.updateContact(0,"country","Australia");

// console.log(user1);
// user1.deleteContact(0);
// console.log(user1);

user1.createContactInfo(0,"Navi Mumbai","Ulwe");
user1.createContactInfo(1,"Navi Mumbai","Kharkopar");
console.log(user1);
console.log(user1.contacts[0].getContactInfo());

console.log(admin.getUserByID(1));
console.log(user1.getContactByID(1));
console.log(user1.getContactInfoByID(1));





//admin-getUserByID(ID)--return User object
//user- getContactByID(ID)
//user - getContactInfoByID(ID)

module.exports = User