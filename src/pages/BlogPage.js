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
        <h3>Fizzbuzz in JavaScript</h3>
      </p>
      <p className="mr-5 ml-5 pr-5 pl-5">
        Fizzbuzz is a common test given to those applying for a junior dev
        position. The goal of the exercise is to cycle through numbers 1 - 100.
        When a number is divisible by 3, the console should log the word “fizz”;
        when the number is divisible by 5, “buzz” should be printed. If the the
        number is divisible by both 3 and 5, the word “fizzbuzz” is printed. In
        addition, it can be modified slightly so that a user can manipulate the
        numbers that are cycled through (e.g. 1 - 500). Here, I'll focus on
        doing this exercise in JavaScript. Because I wish to make the program
        more interactive, I'll place all of it within a function. Let’s call the
        function fizzbuzz.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageOne} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        Next: I'll go ahead and write the code that will call the function and
        give it a number. Because we are passing and parameter into the
        function, we should place a parameter in the parenthesis written above.
      </p>
      <img className="ml-5 mr-5 pl-5 mb-3 pr-5" src={imageTwo} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        In the example above, I want the fizz buzz function's parameter to be
        500; therefore, num will have a value of 500. You can update num by
        changing the number in the second set of parentheses. I'll have to loop
        through a series of numbers. The for loop will start with 1 and go to
        whatever number desired; in my case, 500.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageThree} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        Note: "i" will stand in for the value of 1, and it is compared to the
        number that the user has passed into the function. As long as the middle
        section proves true, the loop will run. In my case, 1 is less than 500;
        therefore, the code that is in the curly brackets will run. Once the
        code runs, 1 will be added to "i". So, "i" is now 2, which is still less
        than 500; and the code in the brackets will run again. Our loop has been
        established. Now, we need to create a structure flow that will both
        evaluate the information coming in and print out the correct response.
        I'll do this with multi-clause conditional statements. Before I write
        them out, it's important we understand how conditional statements work.
        As soon as a condition is met or proves true, the program does not look
        at any other clauses inside the conditional statement. So, if I place
        the clause "fizzbuzz" second or third, it will never render because the
        clauses before it will prove true, and the loop will begin again with
        the next number. Therefore, "fizzbuzz" must come first in our
        conditional clause.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageFour} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        Here, I've initiated the conditional statement with an "if clause".
        Inside the parenthesis we see “i % 5 === 0 && i % 3 === 0”. The first
        half ("i % 5 === 0") asks: if the number that "i" represents is divided
        by 5, does it have 0 as a remainder? If the answer is yes, then that
        number is divisible by 5. If "i" divided by 5 does produce a remainder,
        then the number is not divisible by 5 and the program moves on to check
        the next conditional statement. The "&&" links the two expressions
        together; this way, the program knows that both statements have to be
        true in order for it to run the console.log. The second half of the if
        clause (the right side of "&&") asks the same thing as the first half;
        only this time, the program divides by 3 and not 5. Both statements have
        to be true in order for JavaScript to print out "fizzbuzz" to the
        console. To run a multi-clause conditional statement in JavaScript, we
        have to use the key words "else if". "else" is used as a catch all, if
        all other potential conditions fail to prove true.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageFive} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        The new "else if" statements ask the same thing as the "if" statement;
        but this time, only one condition has to be met. If "i" = 6, the "if"
        clause will prove false (6 has a remainder of 1 when divided by 5). The
        program moves on to the "else if" statement. This statement proves true
        (3 goes into 6 twice with a remainder of 0); therefore, the console logs
        out "fizz". If "i" = 10, then the "if" statement does not run because 3
        goes into to 10 three times with a remainder of 1; but because 10 is
        divisible by 5, the console will log out "buzz". To finish the program,
        I'll use an "else" statement; this statement does not need a condition
        to render true because it will run only when the above three have proved
        false.
      </p>
      <img className="ml-5 mr-5 mb-3 pl-5 pr-5" src={imageSix} alt="Code" />
      <p className="mr-5 ml-5 pr-5 pl-5">
        For fun, let’s say the number "i" is now 14. There'll be a remainder
        when 14 is divided by both 5 or 3. In this case, the only thing printed
        to the console is 14. If all conditional statements have proved false by
        the time the program gets to the "else" clause, the program assumes the
        "else" clause is true and runs it. The "else" clause will print out the
        number that "i" equals to the console, in addition to other numbers that
        create a remainder when divided by either 3 or 5.
      </p>
      <p className="mr-5 ml-5 pr-5 pl-5">
        Next week we’ll take a look at how to enact this simple program in
        Python highlighting both the similarities and differences between the
        two languages.{" "}
      </p>
    </div>
  );
}

export default BlogPage;
