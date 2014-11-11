var astronautNames = [
"Neil Armstrong",
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

function runFunctions(str){
  if(str !== undefined)
  {
    log(str);
  }
  else
  {
    log("hello iam in runFunctions");
  }
};

function runTests()
{
  log(getRelationship('x','y'));
  log(getRelationship('x',5));
  log(getRelationship(5,'y'));
  log(getRelationship(3,5));
  log(getRelationship(13,10));
  log(getRelationship(11,11));
  log("-------------------------------------------");
  log(getRelationship(3));
  log(getRelationship(10,20));
  log(getRelationship(20,10));
  log(getRelationship(10,10));
  log(getRelationship());
}

var thisandthatAreNaNinputsMessage = "Can\'t compare relationships because NaN and NaN are not numbers";
var thisOrthatIsNaNMessage = "Can\'t compare relationships because NaN is not a number";

function runTests_2(){
  document.getElementById("results").innerHTML = "";
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
  console.log(alphabetizer(astronautNames));
}


function log(message){
  var message = message;
  console.log(message);
  //var consoleDiv = document.getElementById("console");
  
  var paragraphNode = document.createElement("li");
  var paragraphContent = document.createTextNode(message);
  paragraphNode.appendChild(paragraphContent);
  document.body.appendChild(paragraphNode);
}


function getRelationship(x,y){
  var firstInputValidationResult;
  var secondInputValidationResult;
  firstInputValidationResult = isNumeric(x);
  secondInputValidationResult = isNumeric(y);
  
  if(!firstInputValidationResult && !secondInputValidationResult)
  {
    return ("Can\'t compare relationships because NaN and NaN are not numbers");
  }
  else if(!firstInputValidationResult)
  {
    return ("Can\'t compare relationships because NaN is not a number");
  }
  else if(!secondInputValidationResult)
  {
    return ("Can\'t compare relationships because NaN is not a number");
  }

  var result;

  x = parseInt(x,10);
  y = parseInt(y,10);

  if(x < y )
  {
     result = '<';
  }
  else if(x > y)
  {
    result = '>';
  }
  else if(x == y ){
    result = '=';
  }
  
  return result;
}

function isNumeric(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}


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
  });
  return newArray.sort();
}


