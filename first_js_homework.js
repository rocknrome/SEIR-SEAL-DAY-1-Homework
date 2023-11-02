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