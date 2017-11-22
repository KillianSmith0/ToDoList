function average(...arguments){
  var sum = 0;
  for(var value of arguments){
    sum += value;
  }
  return sum/arguments.length;
}
