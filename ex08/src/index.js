var contacts = [
    {
    firstName: "John",
    lastName: "Doe",
    number: "12365495208",
    likes: ["C", "C++", "C#"],
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        number: "4568295761",
        likes: ["Python", "Swift", "R"]
    },
    {
        firstName: "Richard",
        lastName: "Roe",
        number: "6938257149",
        likes: ["React", "Angular", "Vue"]
    },
    {
        firstName: "Jane",
        lastName: "Roe",
        number: "unknown",
        likes: ["javaScript", "Node", "HTML & CSS"]
    }



];
function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++){
        if (contacts[x].firstName === name){
            if(contacts[x].hasOwnProperty(prop)){
                return contacts[x];
            }else{
                return "No such property";
            }
        }
    }
    return "No such contact";
}
console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));
module.exports = lookUpProfile;