import React from "react";
import Poster from "../components/Poster";
import reverseStringOne from "../blog image/reverseStringOne.png";
import reverseStringTwo from "../blog image/reverseStringTwo.png";
import reverseStringThree from "../blog image/reverseStringThree.png";
import reverseStringFive from "../blog image/reverseStringFive.png";

function ReverseString(props) {
  return (
    <div>
      <Poster title="Code Challenge" />
      <div>
        <h1>Reverse A String</h1>
      </div>
      <div>
        <p className="mr-3 ml-3 pr-3 pl-3">
          One of the most commonly used code challenges in an interview is to
          reverse a string. The goal of the challenge is to make a string which
          reads “hello” appear as “olleh.” I will briefly discuss two ways (in
          two separate posts) how to do this. The first way is the easiest way
          to solve the problem. First, we will create a function called
          “reverse” this will accept a string as a variable.
        </p>
        <img
          className="mr-3 ml-3 mb-3 pr-3 pl-3"
          src={reverseStringOne}
          alt="Code"
          width="390"
        />
        <p className="mr-3 ml-3 pr-3 pl-3">
          This function will return a new string that will be the reverse
          version of the string passed to the function. To help break it down, I
          have assign a variable to each step although this part is not
          necessary. The first variable will be called “splitString”,
          splitString will take on the string that has been passed to the
          function after the split method has been called on in it. The split
          method is a method that comes with JavaScript and it will take a
          string and break it down into an array placing each character into its
          own index. Now our string has become an array that looks like this
          [‘h’, ‘e’, ‘l’, ‘l’, ‘o’]. This array is then placed into the variable
          splitString.
        </p>
        <img
          className="mr-3 ml-3 mb-3 pr-3 pl-3"
          src={reverseStringTwo}
          alt="Code"
          width="390"
        />
        <p className="mr-3 ml-3 pr-3 pl-3">
          The next variable t0 declare will be called reverseArray because, you
          guessed it, we are going to reverse the array we just made. To do this
          will simply call the reverse method, again another method already
          included with JavaScript, on the splitString variable created in the
          line above. This turns the contents of splitString from [‘h’, ‘e’,
          ‘l’, ‘l’, ‘o’] to [‘o’, ‘l’, ‘l’, ‘e’, ‘h’].
        </p>
        <img
          className="mr-3 ml-3 mb-3 pr-3 pl-3"
          src={reverseStringThree}
          alt="Code"
          width="390"
        />
        <p className="mr-3 ml-3 pr-3 pl-3">
          The third and final variable to declare is joinArray, name thusly
          because this variable will house the array that was just joined
          together and made into a string. We do this by calling the join method
          on the reverseArray variable above. Now the array that was housed in
          reversedArray is a string in the joinArray variable. After that all I
          have to do is return the joinArray variable and boom, one string
          reversed.
        </p>
        <img
          className="mr-3 ml-3 mb-3 pr-3 pl-3"
          src={reverseStringFive}
          alt="Code"
          width="390"
        />
        <p className="mr-3 ml-3 pr-3 pl-3">
          Now I know that some consider the reverse method to be cheating so
          I’ll write post later detailing another way to reverse a string.
        </p>

        <p className="mr-3 ml-3 pr-3 pl-3">Until next time, happy coding!</p>
      </div>
    </div>
  );
}

export default ReverseString;
