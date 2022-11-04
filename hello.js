const sayHello = function (name){
  console.log("hello! "+ name);
}

sayHello("Tyler");
sayHello("Leah");
sayHello("Kaylee");

const returnSayHello = function (name){
  return "Hello! " + name; 
}

const greeting = returnSayHello('Tyler');
console.log(greeting);