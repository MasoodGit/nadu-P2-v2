/************************************************ 
 * Quiz One : Relationships 
 ************************************************/

//Constant string messages.
var thisandthatAreNaNinputsMessage = "Can\'t compare relationships because NaN and NaN are not numbers";
var thisOrthatIsNaNMessage = "Can\'t compare relationships because NaN is not a number";


/*
 * Checks for relationship between the given 
 * two inputs.
 */
function getRelationship(x,y)  {

  var firstInput = filterInt(x);
  var secondInput = filterInt(y);

  if(isNaN(firstInput) && isNaN(secondInput))  {
    return ("Can\'t compare relationships because NaN and NaN are not numbers");
  }
  else if(isNaN(firstInput))  {
    return ("Can\'t compare relationships because NaN is not a number");
  }
  else if(isNaN(secondInput))  {
    return ("Can\'t compare relationships because NaN is not a number");
  }

  var result;

  if(firstInput < secondInput)  {
     result = '<';
  }
  else if(firstInput > secondInput)  {
    result = '>';
  }
  else if(firstInput == secondInput)  {
    result = '=';
  }
  return result;
}

/*
* From : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
* Parses the given input and returns a number 
* else return NaN
*/
function filterInt(value)  {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))  {
    return Number(value);
  }
  else  {
    return NaN;
  }
  
}

/************************************************
* Quiz Two : Astronaut Arrays 
************************************************/

/* Input for Quiz Two : Astronaut Arrays */

var astronautNames = [
"Neil Armstrong Jr",
"Buzz Aldrin",
"Pete Conrad",
"Alan Bean",
"Alan Shepard",
"Edgar Mitchell",
"David Scott",
"James Irwin",
"John W Young",
"Charles Duke",
"Eugene Cernan",
"Harrison Schmitt"];


/*
 * function reformats the names in the array
 * to lastName, firstName and returns a new 
 * sorted array 
 */
function alphabetizer(names)  {
  var newArray = names.map(function(name){
    var aplhaName = name.split(" ");
    if(aplhaName.length === 2)  {
      return aplhaName[1] + ", " + aplhaName[0];
    }
    else if(aplhaName.length === 3)
    {
      return aplhaName[2] + ", " + aplhaName[0] + " " + aplhaName[1];
    }
    else if(aplhaName.length === 4)  {
      return aplhaName[3] + " " + aplhaName[4] + ", " + aplhaName[0] + " " + aplhaName[1];
    }
  });
  return newArray.sort();
}


/******************************************************
* Functions for running tests
*******************************************************/

function runQuizOneTests(){
  setupUIForTests("quizOneResults");
  assert((getRelationship('x','y') === thisandthatAreNaNinputsMessage),"getRelationship('x','y') : this and that are NaN");
  assert((getRelationship('x',5) === thisOrthatIsNaNMessage),"getRelationship('x',5) : this is NaN input");
  assert((getRelationship(15,'asdf') === thisOrthatIsNaNMessage),"getRelationship(15,'asdf')  : that is NaN input");
  assert((getRelationship(35) === thisOrthatIsNaNMessage),"getRelationship(35) : that is Nan input");
  assert((getRelationship(3,5) === "<"),"getRelationship(3,5) : this < that");
  assert((getRelationship(12,5) === ">"),"getRelationship(12,5) : this > that");
  assert((getRelationship(15,15) ==="="),"getRelationship(15,15) : this === that");
  assert((getRelationship(20,5) === ">"), "getRelationship(20,5) : this > that");
  assert((getRelationship('20','5') === ">"), "getRelationship('20','5') : this > that");
  assert((getRelationship() === thisandthatAreNaNinputsMessage),"getRelationship() : this and that are Nan");
  assert(getRelationship(true,false),thisandthatAreNaNinputsMessage);
  assert(getRelationship(" ","  "),thisandthatAreNaNinputsMessage);
}

function runQuizTwoTests()  {
  setupUIForTests("quizTwoResults");
  assert(alphabetizer(astronautNames).length == 12,"Length should be equal to 12");
  Log(alphabetizer(astronautNames));
}

function runPageSpeedQuiz()  {
  setupUIForTests("quizThreeResults");
  assert((ruleList(psiResults).length === 10), "No. of rules is equal to 12");
  assert((totalBytes(psiResults) === 2620885),"TotalByets is equal to 2620885");
}

/*******************************************************
 * Helper functions for diplaying results in UI
 *******************************************************/

function setupUIForTests(resultsDiv)  {
  var resultDivId = resultsDiv
  var element = document.getElementById(resultDivId);
  element.innerHTML= "";
  displayResults = element;

}

function assert(value,desc){
  var li = document.createElement("li");
  li.className = value ? "pass":"fail";
  li.appendChild(document.createTextNode(desc));
  displayResults.appendChild(li);
}

function Log(value)  {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(value));
  displayResults.appendChild(div);
}

var displayResults;
