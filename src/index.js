module.exports = function getZerosCount(number) {
  var a = 5;
  var b = 0;
  do{
    b+=Math.floor(number/a);
    number=Math.floor(number/a);

  }while(number!=0)
  return b;
}
