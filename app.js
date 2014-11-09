
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

function log(message){
  var message = message;
  console.log(message);
  //var consoleDiv = document.getElementById("console");
  
  var paragraphNode = document.createElement("p");
  var paragraphContent = document.createTextNode(message);
  paragraphNode.appendChild(paragraphContent);

  //var oldpara = consoleDiv.querySelector('p');

  //consoleDiv.insertBefore(paragraphNode,oldpara);
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
  
  if(x < y )
  {
     result = '<';
  }
  else if(x > y)
  {
    result = '>';
  }
  else if(x === y ){
    result = '=';
  }
  
  return result;
}

function isNumeric(input){
  return (isNaN(input) ? false : true);  
}

