import React from "react";
import Poster from "../components/Poster";
import imageOne from "../blog image/imageOne.png";
import imageTwo from "../blog image/imageTwo.png";
import imageThree from "../blog image/imageThree.png";
import imageFour from "../blog image/imageFour.png";
import imageFive from "../blog image/imageFive.png";
import imageSix from "../blog image/imageSix.png";

function BlogPage(props) {
  return (
    <div>
      <Poster title={props.title} />
      <p className="mr-5 ml-5 pr-5 pl-5">
        Fizzbuzz in JavaScript Fizzbuzz is a common test given to many people
        applying to a junior dev position. The goal of the exercise is to cycle
        through numbers 1 - 100. When a number is divisible by 3 the console
        should log the word “fizz”, when the number is divisible by 5 “buzz”
        should be printed. If the the number is divisible by both 3 and 5 the
        word “fizzbuzz” is printed. In addition we will modify it slightly so
        that a user can manipulate the numbers that are cycled through, so we
        could run the fizzbuzz test on 1 - 500 if we so desired. We will focus
        on doing this assignment in JavaScript first and then transition to
        Python. Because we wish to make the program more interactive we will
        place all of it within a function. Let’s call this function fizzbuzz.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageOne} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        Next we will go ahead and write the code that will call the function and
        give it a number. Because we are passing and parameter into the function
        we should place a parameter in the parenthesis written above.
      </p>
      <img className="ml-5 mr-5 pl-5 mb-3 pr-5" src={imageTwo} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        In the example above the number 500 is what will be based into the fizz
        buzz function, therefore num will have the value of 500. The use can
        update num by changing the number in the second set of parentheses. We
        know we have to do loop through a series of numbers. With that in mind,
        let make a for loop. The for loop will need to start with the number 1
        and go to whatever the number is the user passes to the function.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageThree} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        Alright, our for loop will start with the number 1, I will stand in for
        the value of that number, it is compared to the number that the user has
        passed into the function. As long as the middle section proves true, the
        loop will run. In our case, 1 is less than 500, therefore, the code
        which will be placed within the curly brackets will run. Once the code
        runs once 1 will be added to 1. I is now 2, which is still less than 500
        meaning the code within the brackets will run again. Our loop has been
        established, now we need to create the structure flow that will evaluate
        the information coming in and print out the correct response outlined in
        the first paragraphed. We will do this with a multi-clause conditional
        statement. Before we write them out it import to understand how
        conditional statements work. As soon as a condition is met or proves
        true, the program does not look at any more clauses of the conditional
        statement. Therefore, if we place the clause which will render fizz buzz
        second or third, it will never render because the one(s) before it will
        prove true and the loop will begin again with the next number.
        Therefore, fizzbuzz must come first in our conditional clause.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageFour} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        Here we have initiated the conditional statement with an if clause.
        Inside the parenthesis we see “i % 5 === 0 && I % 3 === 0” we will
        divide this in half. The first half I % 5 === 0 is asking asking, if the
        number which I represents is divided by 5, does it have 0 as a
        remainder? If the answer is yes, then that number is divisible by 5. If
        I divided by 5 does produce a remainder then the number is not divisible
        by 5 and the program moves on to check the next conditional statement.
        The && links the two express together, this way the program knows that
        both statements have to be true in order for it to run the console.log.
        The second expression on the right side of && is asking the same thing
        as the first expression only this time it is asking it of 3 and not
        five. Both statements have to true in order for JavaScript to print out
        fizz buzz to the console. Now to run a multi-clause conditional
        statement in JavaScript we have to use the key words else if. Else is
        used essentially as a catch all if all other potential conditions fail
        to prove true.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageFive} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        The new else if statements are asking the same thing as the if statement
        but this time only one condition has to be met. If I = 6 the if clause
        will prove false (6 has a remainder of 1 in relation to 5). The program
        moves on to the else if statement. This statement proves true, 3 goes
        into 6 twice with a remainder of 0, therefore, the console logs out
        fizz. If I is 10 then the if statement does not run because 3 goes into
        to 10 three times with a remainder of 1. The console will log out buzz.
        Now to finish our program by including our else statement, this
        statement does not need a condition to render true because this is the
        one which runs only when the above three have proved false.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageSix} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        Let’s say the number I represents is now 14. That number when divided by
        both 5 and 3 will have a remainder. In that case we don’t want a printed
        to the console but the number itself. If all conditional statements have
        proved false by the time it gets to the else clause, the program assumes
        the else clause is true and runs it. This will print out the number 14
        to the console and any other number that creates a remainder when
        divided by either 3 or 5. Next we’ll take a look at how to enact this
        simple program in Python highlighting both the similarities and
        differences between the two languages.{" "}
      </p>
    </div>
  );
}

export default BlogPage;
