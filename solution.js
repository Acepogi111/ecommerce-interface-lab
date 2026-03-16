// Problem 1
function checkVariable(input){

if(input === null){
return "object";
}

switch(typeof input){
case "string": return "string";
case "number": return "number";
case "boolean": return "boolean";
case "bigint": return "bigint";
case "undefined": return "undefined";
case "object": return "object";
}

}
