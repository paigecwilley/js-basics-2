//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
	if(name === "Tyler") {
		return true;	
	}
	else {
		return false;
	}
}

console.log(isTyler('Willow'));
console.log(isTyler('Tyler'));

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


 // var getName = function() {
 // 	return prompt("What is your name?");
  //}
//getName();

//OR function getName() {
//  var name = prompt("What is your name?");
//	return name;
//}

 //function getName(name) {
//  	return prompt("What is your name");
  //}

//console.log(getName());

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  
 // function welcome() {
  //	alert("Welcome, " + getName());
 // }

// welcome();

//Next problem




//What is the difference between arguments and parameters?

//Parameters are placeholders arguments. Parameters are used when you declare a function. 
// Arguments are used when you call a function. The arguments gets passed into the function in place
// of parameter. 

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Nan, undefined, 0, null, false, ''
  // You check if something is falsy by calling it and seeing what comes up!



//Next Problem



//Create a function called myName that returns your name

//function myName() {
 //	return "Paige";
 //}
  


//Now save the function definition of myName into a new variable called newMyName

 // var newMyName = function myName() {
 // 	return "Paige";
 // }
// OR var newMyName = myName;
//Now alert the result of invoking newMyName

//alert(newMyName());


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
  	return function() {
  		return "paige";
  		console.log("Paige");
  	}
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
innerfn();
