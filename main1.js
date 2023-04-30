var student = {
    "firstname":"Jane",
    "LastName":"Doe",
    "Height":1.67,
    "Isenrolled":true
};
console.log(student["firstname"]);
console.log(student["Height"]);
student["firstname"]="Bonam";
console.log(student["firstname"]);
console.log(student);
var student1 = {
    fname:"Esino",
    lname:"Moto",
    height:4.9,
    age:21
}
console.log(student1)
student1.fname = "Iya"
console.log(student1)
delete student1.age;
console.log(student1)
var cities = [
    "Luanda",
    "Kigali",
    "Yaounde",
    "Kumba",
    "Buea"
]
console.log(cities)
console.log(cities[3])
console.log(cities["2"])
cities["2"] = "limbe"
console.log(cities)
console.log(cities.length)
cities[5]= "Ebolowa"
console.log(cities)
delete cities["2"]
console.log(cities)

var rankcity = function(city){
    for(var i=0;i<cities.length; i++){
        if(cities[i]===city){
            return city + " is number " + (i+1)
        }
    }
    return city + " is not among"
}
console.log(rankcity("Douala"))
function myfun(name){
    console.log("My name is "+ name)
}
myfun("Osene")
var newfun = myfun
newfun("Lwrencium")

  var date = new Date();
  document.body.innerHTML = "<h2>Today's date is: " + date + " for Bonam Osene <h2>";
