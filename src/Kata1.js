import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const StringIncrementer = () => {
  const code = `function incrementString (str) {
  if(isNaN(str.slice(-1)) && str){
    return str + 1
  }else if(!str){
    return '1'
  }else{
    let char = str.replace(/[0-9]/g, '') 
    let num = str.replace(/\D/g, '')
    let incNum = parseInt(num, 10) + 1
    return char + incNum.toString().padStart(num.length, '0')
  }
}`;
  return (
    <>
      <h2 className="title">String Incrementer</h2>
      <div className="description">
        <h3>Description:</h3>
        Your job is to write a function which increments a string, to create a
        new string.
        <br />
        If the string already ends with a number, the number should be
        incremented by 1. If the string does not end with a number. the number 1
        should be appended to the new string. Examples:
        <br />
        foo {`->`} foo1
        <br />
        foobar23 {`->`} foobar24
        <br />
        foo0042 {`->`} foo0043
        <br />
        foo9 {`->`} foo10
        <br />
        foo099 {`->`} foo100
        <br />
        Attention: If the number has leading zeros the amount of digits should
        be considered.
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const SimplePigLatin = () => {
  const code = `function pigIt(str){
  const wordSplice = (wrd) => {
    if(/^[a-zA-Z]+$/.test(wrd)){ 
      return wrd.substr(1, wrd.length) + wrd.charAt(0) + 'ay'
    }else{
      return wrd
    }  
  }
  return str.split(' ').map((x) => wordSplice(x)).join(' ')
}`;
  return (
    <>
      <h2 className="title">Simple Pig</h2>
      <div className="description">
        <h3>Description:</h3>
        <div>
          Move the first letter of each word to the end of it, then add "ay" to
          the end of the word. Leave punctuation marks untouched.
          <br />
          Examples:
          <br />
          pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
          <br />
          pigIt('Hello world !'); // elloHay orldway !
        </div>
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const RGBToHexConversion = () => {
  const code = `function toHex(x) {
  const hex = x.toString(16);
  return hex.length == 1 ? "0" + hex : hex < 0 ? "00" : x > 255 ? "FF" : hex;
}
  
function rgb(r, g, b){
  let hex = toHex(r) + toHex(g) + toHex(b)
  return hex.toUpperCase()
}`;
  return (
    <>
      <h2 className="title">RGB to Hex Conversion</h2>
      <div className="description">
        <h3>Description:</h3>
        The rgb function is incomplete. Complete it so that passing in RGB
        decimal values will result in a hexadecimal representation being
        returned. Valid decimal values for RGB are 0 - 255. Any values that fall
        out of that range must be rounded to the closest valid value.
        <br />
        Note: Your answer should always be 6 characters long, the shorthand with
        3 will not work here.
        <br />
        The following are examples of expected output values:
        <br />
        rgb(255, 255, 255) // returns FFFFFF
        <br />
        rgb(255, 255, 300) // returns FFFFFF
        <br />
        rgb(0,0,0) // returns 000000
        <br />
        rgb(148, 0, 211) // returns 9400D3
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const CompleteFibonacciSeries = () => {
  const javascriptCode = `function fibonacci(n) {
  const values = [0, 1]
  if (n < 1){
    return []
  } else if (n === 1){
    return [0]
  }else{
  for (let i = 0; i < n - 2; ++i) {
    values.push(values[values.length - 1] + values[values.length - 2]);
    }
  return values;
  }
}`;
  const rubyCode = `def fibonacci(n)
  values = [0, 1]
  if n < 1
    []
  elsif n == 1
    [0]
  else
    (n - 2).times do
      values << values[-1] + values[-2]
    end
  values
  end
end`;
  return (
    <>
      <h2 className="title">Complete Fibonacci Series</h2>
      <div className="description">
        <h3>Description:</h3>
        The function 'fibonacci' should return an array of fibonacci numbers.
        The function takes a number as an argument to decide how many no. of
        elements to produce. If the argument is less than or equal to 0 then
        return empty array
        <br />
        Example:
        <br />
        fibonacci(4) // should return [0,1,1,2]
        <br />
        fibonacci(-1) // should return []
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {javascriptCode}
      </SyntaxHighlighter>
      <h3>Ruby</h3>
      <SyntaxHighlighter language={"ruby"} style={darcula}>
        {rubyCode}
      </SyntaxHighlighter>
    </>
  );
};

export const SumStringsasNumbers = () => {
  const code = `"use strict";
const reverseArr = s => s.split("").reverse();
  
function sumStrings(a, b) {
  [a, b] = [reverseArr(a), reverseArr(b)];
  let carry = 0;
  const arr = []
  const [mx, mn] = (a.length >= b.length) ? [a, b] : [b, a];
  mx.forEach((itm, idx) => {
    let sm = Number(itm) + (Number(mn[idx]) || 0) + carry;
    [sm, carry] = sm > 9 ? [sm%10, 1] : [sm, 0];
    arr.unshift(sm)
  })
  if (carry) arr.unshift(carry);
  return arr.join("").replace(/^(0+)/, "");
}`;
  return (
    <>
      <h2 className="title">Sum Strings as Numbers</h2>
      <div className="description">
        <h3>Description:</h3>
        Given the string representations of two integers, return the string
        representation of the sum of those integers.
        <br />
        For example:
        <br />
        sumStrings('1','2') // ={`>`} '3'
        <br />A string representation of an integer will contain no characters
        besides the ten numerals "0" to "9".
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const SplitStrings = () => {
  const code = `function solution(str){
  if(str.length > 0){
    const arr = str.match(/.{1,2}/g)
    const last = arr.slice(-1)
    if(last.join('').length === 1){
      last.push('_')
      arr.pop()
      arr.push(last.join(''))
      return arr
    }else{
      return arr
    }
  }else{
    return []
  }
}`;
  return (
    <>
      <h2 className="title">Split Strings</h2>
      <div className="description">
        <h3>Description:</h3>
        Complete the solution so that it splits the string into pairs of two
        characters. If the string contains an odd number of characters then it
        should replace the missing second character of the final pair with an
        underscore ('_').
        <br />
        Examples:
        <br />
        solution('abc') // should return ['ab', 'c_']
        <br />
        solution('abcdef') // should return ['ab', 'cd', 'ef']
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const TheHashtagGenerator = () => {
  const code = `function generateHashtag (str) {
  if (str === "" || str.replace(/\s/g,'') === ''){
    return false
  }else{
    const hash = "#" + str.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('');
    if (hash.length > 140){
      return false
    }else{
      return hash
    }
  } 
}`;
  return (
    <>
      <h2 className="title">The Hashtag Generator</h2>
      <div className="description">
        <h3>Description:</h3>
        The marketing team is spending way too much time typing in hashtags.
        <br />
        Let's help them with our own Hashtag Generator!
        <br />
        Here's the deal:
        <br />
        It must start with a hashtag (#).
        <br />
        All words must have their first letter capitalized.
        <br />
        If the final result is longer than 140 chars it must return false.
        <br />
        If the input or the result is an empty string it must return false.
        <br />
        Examples
        <br />" Hello there thanks for trying my Kata" ={`>`}{" "}
        "#HelloThereThanksForTryingMyKata"
        <br />" Hello World " ={`>`} "#HelloWorld"
        <br />
        "" ={`>`} false
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const FindTheNextPerfectSquare = () => {
  const code = `function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 === 0){
    const root = (Math.sqrt(sq) + 1)
    return root * root
  }else{
    return -1
  }
}`;
  return (
    <>
      <h2 className="title">Find the next perfect square!</h2>
      <div className="description">
        <h3>Description:</h3>
        You might know some pretty large perfect squares. But what about the
        NEXT one?
        <br />
        Complete the findNextSquare method that finds the next integral perfect
        square after the one passed as a parameter. Recall that an integral
        perfect square is an integer n such that sqrt(n) is also an integer.
        <br />
        If the parameter is itself not a perfect square then -1 should be
        returned. You may assume the parameter is non-negative.
        <br />
        Examples:(Input --{`>`} Output)
        <br />
        121 --{`>`} 144
        <br />
        625 --{`>`} 676
        <br />
        114 --{`>`} -1 since 114 is not a perfect square
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const RegexValidatePINCode = () => {
  const code = `function validatePIN (pin) {
  if(pin.length === 4 && pin.match(/^[0-9]+$/) != null|| pin.length === 6 && pin.match(/^[0-9]+$/) != null) {
  return true;} else {return false;}  
}`;
  return (
    <>
      <h2 className="title">Regex validate PIN code</h2>
      <div className="description">
        <h3>Description:</h3>
        ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
        anything but exactly 4 digits or exactly 6 digits.
        <br />
        If the function is passed a valid PIN string, return true, else return
        false.
        <br />
        Examples (Input --{`>`} Output)
        <br />
        "1234" --{`>`} true
        <br />
        "12345" --{`>`} false
        <br />
        "a234" --{`>`} false
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const FindTheDivisors = () => {
  const code = `function divisors(integer) {
  function isPrime(num) {
    for (var i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1
  }
  if (isPrime(integer) === false) {
    let factors = []
    for (let i = 2; i < integer; i++) {
      if (integer % i == 0) {
        factors.push(i);
      }
    }
    return factors
  } else {
    return \`\${integer} is prime\`\     
  }
}`;
  return (
    <>
      <h2 className="title">Find the Divisors!</h2>
      <div className="description">
        <h3>Description:</h3>
        Create a function named divisors/Divisors that takes an integer n > 1
        and returns an array with all of the integer's divisors(except for 1 and
        the number itself), from smallest to largest. If the number is prime
        return the string '(integer) is prime'.
        <br />
        Example:
        <br />
        divisors(12); // should return [2,3,4,6]
        <br />
        divisors(25); // should return [5]
        <br />
        divisors(13); // should return "13 is prime"
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

const Kata1 = () => {
  return (
    <>
      <StringIncrementer />
      <SimplePigLatin />
      <RGBToHexConversion />
      <CompleteFibonacciSeries />
      <SumStringsasNumbers />
      <SplitStrings />
      <TheHashtagGenerator />
      <FindTheNextPerfectSquare />
      <RegexValidatePINCode />
      <FindTheDivisors />
    </>
  );
};
export default Kata1;
