/*let traffic_light="orange";

if(traffic_light=="red"){
console.log("Stop");
}
else if(traffic_light=="orange"){
console.log("Ready");
}
else if(traffic_light=="green"){
console.log("Go");
}
else{
console.log("There is an error");
}*/

//switch case

let traffic_light="red";
switch(traffic_light)
  {
    case "orange":console.log("ready");
    break;
    case "red":console.log("stop");
    break;
    case "green":console.log("go");
    break;
    default:console.log("There is an error");
  }