

    var readlineSync=require('readline-sync');
    var number = parseInt(readlineSync.question("Enter value : "));

    
switch(number)
{
    case 0:
    console.log("zero"); 
   break;
   case 1:
    console.log("one"); 
   break;
   case 2:
    console.log("two"); 
   break;
   case 3:
    console.log("Three"); 
   break;
   default:
   console.log("Invalid Entry");
   break;
}