// if...else..if

/*let supermarket = "babool";

if( supermarket == "Sensodyne")
{
console.log("get sensodyne");
}
else if(supermarket=="colgate")
{
console.log("get colgate");
}
else if(supermarket=="dabur")
{
console.log("get patanjali");
}
else if(supermarket=="pepsodent")
{
console.log("get pepsodent");
}
else
{
console.log("don't get toothpaste");
}*/

let supermarket="colgate";
switch(supermarket)
{
  case "pepsodent" : console.log("get pepsodent");
break;
  case "patanjali": console.log("get patanjali");
break;
  case "sensodyne": console.log("get sensodyne");
break;
  case "colgate": console.log("get colgate");
break;
default:console.log("don't get toothpaste");
}

/*let supermarket = "glister";
let wanttoothpaste ="glister";
let price = 500;

if((supermarket==wanttoothpaste)&&(price<=300))
{
  console.log("I get my toothpaste");
}
else
{
  console.log("didn't get toothpaste");
}*/

//Or Operator

/*let supermarket = "glister";
let wanttoothpaste ="glistr";
let price = 500;

if((supermarket==wanttoothpaste) || (price<=300))
{
  console.log("I get my toothpaste");
}
else
{
  console.log("didn't get toothpaste");
}*/

/*let supermarket = "glister";

if((supermarket=="colgate") || (supermarket=="pepsodent") || (supermarket=="glister") || (supermarket=="pepsodent"))
{
  console.log("I get my toothpaste");
}
else
{
  console.log("didn't get toothpaste");
}*/