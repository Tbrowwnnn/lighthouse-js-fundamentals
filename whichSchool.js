/*var age = 35;
var whichSchool;

if (age < 13){
  whichSchool="Elementary School"
}else if (age >= 13 && age <=18){
  whichSchool="Secondary School"
}else{
  whichSchool="Lighthouse Labs"
}
console.log(whichSchool);*/

/*const whichSchool = function(age){
  return if(age < 13){
    whichSchool="Elementary School"
  }else if (age >= 13 && age <=18){
    whichSchool="Secondary School"
  }else{
    whichSchool="Lighthouse Labs"
  }
}*/
const whichSchool = function (age){
  if (age < 13){
    return "Elementary School";
  }else if (age >= 13 && age <=18){
    return "Secondary School";
  }else {
    return "Lighthouse Labs"
  }
}
console.log(whichSchool(35));