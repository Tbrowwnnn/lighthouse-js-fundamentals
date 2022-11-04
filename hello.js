const sayHello = function (name){
  console.log("hello! "+ name);
}

sayHello("Tyler");
sayHello("Leah");
sayHello("Kaylee");

const returnSayHello = function (name){
  return returnSayHello + name; 
}

const greeting = returnSayHello("Tyler");
console.log(greeting);