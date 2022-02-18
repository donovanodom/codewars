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
      <h2 className="title">String incrementer</h2>
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
    </>
  );
};
export default Kata1;
