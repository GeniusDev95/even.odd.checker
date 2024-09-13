let input = Number(prompt("Enter the number to check whether it is even or odd"));

if(isNaN(input)){
    alert("Please enter a valid number")
}
else if(input % 2 === 0){
    alert("The number " + input + " is Even")
}
else{
    alert("The number " + input + " is Odd" + "\n" + "\n" +
    "After incrementing, the number is " + ++input)
}