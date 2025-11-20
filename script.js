 let input1 = prompt("Enter the first number:");
 let input2 = prompt("Enter the second number:"); 
let flag = false;
if(input1 == "" || input2 == ""){ 
	flag=true;
}
input1 = Number(input1);
input2 = Number(input2);
if(isNaN(input1) == false && isNaN(input2) == false && flag == false){
	alert(`The sum of ${input1} and ${input2} is ${Number(input1) + Number(input2)}.`);
}
else{     
	alert(`Invalid input. Please enter a valid number.`)
}

// Write your code here and print the output using alert function
