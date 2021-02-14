/*
* Object

* Object basics

* Create an object
  * Object literal
  * Object constructor
  * Object.create() 
  
* Create an object instances 
  * Factory function
  * Constructor function
  * Class (ES6)
  
* Accessing / Adding / Updating / Deleting 

* Iterate over object 
  * for in loop
  * Object.keys()
  * Object.values()
  
* "in" operator : check if the object has a certain property
*/

/*
* Object basics
*/
const user = {
  username : "user 1",
  password : "123",
  city: "Dublin",
  greeting : function(){
      console.log("hello there!")
  }
}

/*
* Create an object 
*/
// Object literal
const object_1 = {}

// Object constructor
const object_2 = new Object()

// Object.create()
const object_3 = Object.create(user)
object_3.color = "blue"
object_3.city = "new york"
object_3.bio = function(){console.log("hey! I'm from New York")}
console.log(object_3)

/*
* Create an object instances
*/
// Factory function
function createUser(username, city){
   return {
       username : username,
       city: city,
       greeting : function(){
       console.log("hello there!")
       }
   }
}

const user_1 = createUser('user_1', 'Dublin')
const user_2 = createUser('user_2', 'New York')
console.log(user_1) // {username: "user_1", city: "Dublin", greeting: ƒ}
console.log(user_2) // {username: "user_2", city: "New York", greeting: ƒ}

// Object constructor
function User(username, city){
this.username = username
this.city = city
this.greeting = function(){
    console.log("hello there!")
    }
}

const user_3 = new User('user_3', 'Paris')
const user_4 = new User('user_4', 'Tokyo')
console.log(user_3) // User {username: "user_3", city: "Paris", greeting: ƒ}
console.log(user_4) // User {username: "user_4", city: "Tokyo", greeting: ƒ}

// Class (ES6)
class Avatar{
   constructor(username, city){
       this.username = username
       this.city = city
   }  
   greeting(){
       console.log("hello there!")  
   }
}

const user_5 = new Avatar('user_5', 'Moscow')
const user_6 = new Avatar('user_6', 'Dubai')
console.log(user_5) // Avatar {username: "user_5", city: "Moscow"}
console.log(user_6) // Avatar {username: "user_6", city: "Dubai"}


/*
* Accessing / Adding / Updating / Deleting 
*/
// Accessing
console.log(user.username) // dot notation
console.log(user['username']) // square bracket notation 
user.greeting()

// Adding 
const dataName = 'color'
const dataValue = 'white'

user.dataName = dataValue // dataName: "white", dot notation only accpets a literal property name
user[dataName] = dataValue // color: "white", square bracket notation accepts JS expression
user['color'] = 'pink'

// Updating 
user.username = 'John'
user['username'] = 'Sarah'

// Deleting
delete user.password
delete user['dataName']


/*
* Iterate over object 
*/
for(key in user){
  console.log(key) // get all the properties
  console.log(user[key]) // get all the values
}

Object.keys(user) // returns an array of all keys of an object
Object.values(user) // returns an array of all values of an object

/*
* "in" operator : check if the object has a certain property
*/

console.log("username" in user) // true
console.log("password" in user) // false
