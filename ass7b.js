// findSum() declared....
function findSum()
{
// to get the length of argument in a variable...
var no_of_arguments = arguments.length ;

var i , sum = 0 ;


// loop is used to get the sum 
for(i=0;i<no_of_arguments;i++)
	{
	sum +=arguments[i];			//calculating sum using arguments array...
	}
	return sum;
}


//findSum() is called with different parameters..
var result= findSum(5,10,15);
console.log("Sum of 5 , 10 & 15 = " +result);
