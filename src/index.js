
exports.min = function min (array) {
  if (array==0 || arguments.length==0){
  return 0;
}
else{
  return Math.min.apply(null,array)
}
}
exports.max = function max (array) {
  if (array==0 || arguments.length==0){
    return 0;
  }
  else{
    return Math.max.apply(null,array)
  }
}

exports.avg = function avg (array) {
  if (array==0 || arguments.length==0){
    return 0;
  }
  else{
    return (array.reduce(function(x,y){
      return x+y
    },0)/array.length)
  }
}
