function addtwoNumber()
{
// to gerate a randome rounded number between 1 to 6;
var theRandomNumber1 = (Math.floor((Math.random() * 99) + 10));
var theRandomNumber2 = (Math.floor((Math.random() * 99) + 10));
var theRandomNumber3 = (Math.floor((Math.random() * 99) + 10));
var theRandomNumber4 = (Math.floor((Math.random() * 99) + 10));
var theRandomNumber5 = (Math.floor((Math.random() * 99) + 10));
var sum=theRandomNumber1+theRandomNumber2+theRandomNumber3+theRandomNumber4+theRandomNumber5;
var avg=((theRandomNumber1+theRandomNumber2+theRandomNumber3+theRandomNumber4+theRandomNumber5)/5);
console.log(sum);
console.log(avg);

}
addtwoNumber();