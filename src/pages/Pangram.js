import React from "react";
import Poster from "../components/Poster";
import pangramOne from "../blog image/pangramOne.png";
import pangramTwo from "../blog image/pangramTwo.png";
import pangramThree from "../blog image/pangramThree.png";
import pangramFour from "../blog image/pangramFour.png";

function Pangram(props) {
  return (
    <div>
      <Poster title="Code Challenge" />
      <div>
        <h1>Discover If A Sentence Contains Every Letter Of The Alphabet</h1>
      </div>
      <div>
        <p className="mr-3 ml-3 pr-3 pl-3">
          Today, we will look at make a pangram in JavaScript. A pangram is a
          sentence which contains every letter of the alphabet.
        </p>
        <p className="mr-3 ml-3 pr-3 pl-3">
          We will begin by making function called pangram which will take one
          argument, the string (sentence) being passed into the function. I will
          pass it the sentence “The quick brown fox jumps over the lazy dog.”
          This sentence is a pangram.
        </p>
        <img
          className="mr-3 ml-3 mb-3 pr-3 pl-3"
          src={pangramOne}
          alt="Code"
          width="390"
        />
        <p className="mr-3 ml-3 pr-3 pl-3">
          Next, I will create a string with every letter of alphabet and store
          it in the variable called alpha. JavaScript does not automatically
          equate upper case letters with their lower case counterparts. So, in
          order to ensure capital letters do not throw off our program I will
          take the argument and use the toLowerCase() method on it. This will
          make the capital T in the “The” into “the”. I will store the new lower
          case version of the sentence in a variable called lower.
        </p>
        <img
          className="mr-3 ml-3 mb-3 pr-3 pl-3"
          src={pangramTwo}
          alt="Code"
          width="390"
        />
        <p className="mr-3 ml-3 pr-3 pl-3">
          I will use a basic for loop to iterate through the alpha string. The
          loop will go through the letters of the alphabet stored in the
          variable alpha. The following if statement uses the indexOf() method
          to find each letter of the alphabet (stored in alpha) in the string
          stored in lower. If the conditional statement item could not be found.
          So if at any point a -1 is returned, the program returns “false”
          because it is not a pangram. If the loop complete and never return
          false than the “true” is returned because it means that the sentence
          passed to the function is a pangram.
        </p>
        <img
          className="mr-3 ml-3 mb-3 pr-3 pl-3"
          src={pangramThree}
          alt="Code"
          width="390"
          height="200"
        />
        <img
          className="mr-3 ml-3 mb-3 pr-3 pl-3"
          src={pangramFour}
          alt="Code"
          width="390"
          height="200"
        />

        <p className="mr-3 ml-3 pr-3 pl-3">Until next time, happy coding!</p>
      </div>
    </div>
  );
}

export default Pangram;
