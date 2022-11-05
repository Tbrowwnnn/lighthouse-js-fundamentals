var lastIndexOf = function(arrays, looker){
  var indexed = -1;
  var secondArray = [];

  for(let i = arrays.length -1; /*arrays[i] != looker &&*/ i > 0; i--){
      if (arrays[i] === looker){
        
        secondArray.push(i);

        indexed = secondArray.length + 1;
    }
  }return indexed;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));


