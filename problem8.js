var readlineSync=require('readline-sync');
var number = parseInt(readlineSync.question("Enter value : "));


switch(number)
{
case 1:
console.log("One"); 
break;
case 10:
console.log("Ten"); 
break;
case 100:
console.log("Hundred"); 
break;
case 1000:
console.log("One Thousand"); 
break;
case 10000:
console.log("Ten Thousand");
break;
default:
    console.log("Invalid value");
}
    

  