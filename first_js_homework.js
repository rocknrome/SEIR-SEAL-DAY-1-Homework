//Questions:
/*
Section 1
1. What does the acronym DRY stand for? Why should we pay attention to it? 
What programming tools have we learned to write DRY code?

2. What is the difference between const and let and var? 
Please limit your answer to no more than three short sentences. 
Don't be afraid to research using google and other resources.

Answers:
1. The acronym DRY stands for "Dont Repeat Yourself", 
which means that if there is a way to make the code compact and less combersome, 
we should use that as a guidance when writing our code.
An example of using DRY approach would be Declaring global variables 
that are used everywhere in the code, or using LOOPS or writing a function 
that we can call anywhere in the code instead of re-writing its functionality each time.

2. "Const" is a variable that is declared, set and is unchangeable. 
"Let" varible can be re-assigned later on if needed. 
"Var" is an outdated way of declaring a variable.


Section 2
Boolean expressions

Code:

Using the provided variable definitions, replace the blanks (underscores) with a mathematical or boolean operator 
that evaluates the expression to true (some may have more than one right answer, just choose one)
Test your answers by using console.log for each expression in your answer file.*/


  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kelvin';
  const f = false;

console.log(a < b);

console.log(c > d);

console.log('Name' === 'Name');

console.log(a < b < c);

console.log(a * a == d);

console.log(e != 'Kevin');

console.log(48 == '48');

console.log(f != e);


/*Set a new variable g to 0

console.log g

Then set the variable g to be equal to b + c

console.log g*/

let g=0; //I used LET to declare this varible as we needed to change its value later in the code.
console.log(g);
g=b+c;
console.log(g);

/*Bonus Challenge (optional): Replace the underscores to make a Boolean expression that evaluates to true. 
Use no more than one of the following: > , < !== and ===.

a _ (b || f) _ !f && e _ c*/

console.log(a > (b || f) !== !f || e < c);

/*Questions:

Is the code below an infinite loop? Why or why not?
Don't worry about getting it 'wrong' - you'll be graded on your reasoning, not if your ultimate answer is correct.
You should NOT test (run) this code, so read it line by line and 'execute' the code in your head.*/

//while (true) {
	console.log('Do not run this loop');
}
/*ANSWER: This is DEFINITELY AN INFINITE LOOP The "true" condition in the brackets will always remain TRUE 
boolean and will satisfy the condition of running the code block (console.log) making the code block run forever.

/*Infinite loop II is this loop an infinite loop? Why or why not?*/

const runProgram = true;

//while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
/*ANSWER:
This loop is also an example of an infinite loop. The same principle applyes here as well: 
the loop condition always remains TRUE by default, because it was declared as such. and the code block 
will run forever. An attempt to declare it as "false" at the end of the code will not have any affect, cuz 
it was originally declared as "const".*/



/*The following while loop uses a compound assignment operator, i.e. +=
Without running this loop, what is the expected output?
Read the code line by line-- everything happens in sequence. 
Write down what you think the code will log in the Terminal by adding comments 
before each line of code, explaining what that line of code will do. 
Be patient with your thought! There is no rush.*/

//declaring variable "letters" and setting it to be equal to "A"
let letters = "A";
//setting up a counter with initial value of zero
let i = 0;
//setting up a While loop that will execute a code block while the condition of the loop remains true (i<20)
while (i < 20) {
    //the variable will have additions each time the loop runs
	letters += "A";
    //counter is set to increment by one each time
	i++;
}
//the output is set to be displayed in the Terminal as calculation of the initial variable.
//in this case we will see A then AA then AAA and so on till there will be 21 letters A in the row. 
//21 because we start frm 0 and count to 20.
console.log(letters);

/*SECTION 4

LOOPS

QUESTION:
A for loop performs the same operation as a while loop. But what are the key differences, if any? 
What are the similarities?
ANSWER:
Differences: FOR loop has the condition of the loop and the counter declared in the same line, 
the WHILE loop has those separated. FOR loop has a determined number of iterations set. WHILE is running while 
the loop condition remains TRUE.
the similarity is that both designed to execute repeated actions.



For loop control panel
Here is an example for loop that prints a message 100 times:

for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
QUESTION:
What are the three components of the control panel? Each component is separated by a semicolon ;.
Remember: Write your answers as comments in the file.

ANSWER:
The first part of the control panel is: let i=0. We declare the initialization. 
The second part of the control panel is: i<100. We declare condition for the loop. 
The third part of the control panel is: i++. We are setting up an increment.

For loop II
Write a for loop that will console.log the numbers 0 to 999.

ANSWER:*/
for (let i=0; i<10; i++) { //replace 10 with 100 as per task
  console.log(i);
}

/*BONUS TASK:

QUESTION:
What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, 
shares the key with the ?)? What is \ doing in the string?

console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
console.log("Without you, today's emotions are the scurf of yesterday's");

ANSWER: This is used in the string in case of ' and ? symbols used in the text, to mark those as a part of the string, 
and not a part of the code. */


/*For loop in reverse
Code:

Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. 
Console.log a countdown from 999 to 0.*/
for (i=9; i>=0; i--) {
  console.log(i);
}

/*More counting
Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.

The loop should run from 1 to 10.

Expected Result:

The value of i is: 1 of 10
The value of i is: 2 of 10
The value of i is: 3 of 10
The value of i is: 4 of 10
The value of i is: 5 of 10
The value of i is: 6 of 10
The value of i is: 7 of 10
The value of i is: 8 of 10
The value of i is: 9 of 10
The value of i is: 10 of 10*/
for (i=1; i<=10; i++) {
  console.log("The value of i is: " + i + " of 10");
}

/*Bonus Challenge (optional):

Rewrite the above loop using String Interpolation/Template Literals instead of concatenation

Note: string interpolation uses backticks, this is a different character than a single quote. 
The backtick can usually be found above the left tab key/below the esc key and it shares it with the tilda ~*/
for (let i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i} of 10`);
}


/*Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
Iterate over the StarWars array and print each element to the console.*/
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i++) { //uses length of the array as the end point 
  //to iterate thru all elements of the array
  console.log(`Element ${i}: ${StarWars[i]}`); //interpolation user to display the results
}


/*Iterate over the StarWars array again and print each character's name as well as the value of i.

Bonus Challenge (optional):

Figure out how to iterate over every second element of the StarWars array, starting with the first element.
=> Han, R2D2, Leia*/
for (let i = 0; i < StarWars.length; i += 2) { //the increment needs to be changed to iterate over every second element
  console.log(`Every second element: ${StarWars[i]}`);
}
