import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const CategorizeNewMember = () => {
  const code = `function openOrSenior(data){
  return data.map(x => x[0] > 54 && x[1] > 7 ? 'Senior' : 'Open')
}`;
  return (
    <>
      <h2 className="title">Categorize New Member</h2>
      <div className="description">
        The Western Suburbs Croquet Club has two categories of membership,
        Senior and Open. They would like your help with an application form that
        will tell prospective members which category they will be placed.
        <br />
        To be a senior, a member must be at least 55 years old and have a
        handicap greater than 7. In this croquet club, handicaps range from -2
        to +26; the better the player the lower the handicap.
        <br />
        Input:
        <br />
        Input will consist of a list of pairs. Each pair contains information
        for a single potential member. Information consists of an integer for
        the person's age and an integer for the person's handicap.
        <br />
        Output:
        <br />
        Output will consist of a list of string values (in Haskell: Open or
        Senior) stating whether the respective member is to be placed in the
        senior or open category.
        <br />
        Example:
        <br />
        input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
        <br />
        output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
      </div>
      <h3>JavaScript</h3>
      <SyntaxHighlighter language={"javascript"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const TwoToOne = () => {
  const code = `def longest(a1, a2)
  a1.concat(a2).split('').uniq.sort.join
end`;
  return (
    <>
      <h2 className="title">Two to One</h2>
      <div className="description">
        Take 2 strings s1 and s2 including only letters from ato z. Return a new
        sorted string, the longest possible, containing distinct letters - each
        taken only once - coming from s1 or s2.
        <br />
        Examples:
        <br />
        a = "xyaabbbccccdefww"
        <br />
        b = "xxxxyyyyabklmopq"
        <br />
        longest(a, b) -{">"} "abcdefklmopqwxy"
        <br />
        a = "abcdefghijklmnopqrstuvwxyz"
        <br />
        longest(a, a) -{">"} "abcdefghijklmnopqrstuvwxyz"
      </div>
      <h3>Ruby</h3>
      <SyntaxHighlighter language={"ruby"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const WriteNumberInExpandedForm = () => {
  const code = `def expanded_form(num)
  num_s = num.to_s
  if num_s.length > 1
    new = num_s.split('').each_with_index.map do |x,i| 
      if x != 0 && num_s.length > 1 
       add = num_s.length - (i.to_i + 1)
        x.to_i * (10 ** add)
      end
    end
    new.delete_if {|x| x == 0}.join(" + ")
    else
    num_s
  end
end`;
  return (
    <>
      <h2 className="title">Write Number in Expanded Form</h2>
      <div className="description">
        Write Number in Expanded Form
        <br />
        You will be given a number and you will need to return it as a string in
        Expanded Form. For example:
        <br />
        expanded_form(12); # Should return '10 + 2'
        <br />
        expanded_form(42); # Should return '40 + 2'
        <br />
        expanded_form(70304); # Should return '70000 + 300 + 4'
        <br />
        NOTE: All numbers will be whole numbers greater than 0.
      </div>
      <h3>Ruby</h3>
      <SyntaxHighlighter language={"ruby"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const EqualSidesOfAnArray = () => {
  const code = `def find_even_index(arr)
  right = arr.sum
  left = 0
  arr.each_with_index { |e, i|
    right -= e
    return i if left == right
    left += e
  }
  -1
end`;
  return (
    <>
      <h2 className="title">Equal Sides Of An Array</h2>
      <div className="description">
        You are going to be given an array of integers. Your job is to take that
        array and find an index N where the sum of the integers to the left of N
        is equal to the sum of the integers to the right of N. If there is no
        index that would make this happen, return -1.
        <br />
        For example:
        <br />
        Let's say you are given the array {"{1,2,3,4,3,2,1}"}:
        <br />
        Your function will return the index 3, because at the 3rd position of
        the array, the sum of left side of the index ({(1, 2, 3)}) and the sum
        of the right side of the index ({(3, 2, 1)}) both equal 6.
        <br />
        Let's look at another one.
        <br />
        You are given the array {"{1,100,50,-51,1,1}"}:
        <br />
        Your function will return the index 1, because at the 1st position of
        the array, the sum of left side of the index ({1}) and the sum of the
        right side of the index ({(50, -51, 1, 1)}) both equal 1.
        <br />
        Last one:
        <br />
        You are given the array {"{20,10,-80,10,10,15,35}"}
        <br />
        At index 0 the left side is {}
        <br />
        The right side is {"{10,-80,10,10,15,35}"}
        <br />
        They both are equal to 0 when added. (Empty arrays are equal to 0 in
        this problem)
        <br />
        Index 0 is the place where the left side and right side are equal.
        <br />
        Note: Please remember that in most programming/scripting languages the
        index of an array starts at 0.
        <br />
        Input:
        <br />
        An integer array of length 0 {"<"} arr {"<"} 1000. The numbers in the
        array can be any integer positive or negative.
        <br />
        Output:
        <br />
        The lowest index N where the side to the left of N is equal to the side
        to the right of N. If you do not find an index that fits these rules,
        then you will return -1.
      </div>
      <h3>Ruby</h3>
      <SyntaxHighlighter language={"ruby"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export const WhoLikesIt = () => {
  const code = `def likes(names)
  if names.length == 0
    "no one likes this"
  elsif names.length == 1
    "#{names.first} likes this"
  elsif names.length == 2
    "#{names.insert(1,"and").join(" ")} like this"
  elsif names.length == 3
    last = names.pop
    second_to_last = names.pop
    "#{names.map { |x| x.concat(",") }.push(second_to_last).push(last).insert(-2,"and").join(" ")} like this"
    else
    names[0] + ", " + names[1] + " and #{names.length-2} others like this"
  end
end`;
  return (
    <>
      <h2 className="title">Who likes it?</h2>
      <div className="description">
        You probably know the "like" system from Facebook and other pages.
        People can "like" blog posts, pictures or other items. We want to create
        the text that should be displayed next to such an item.
        <br />
        Implement the function which takes an array containing the names of
        people that like an item. It must return the display text as shown in
        the examples:
        <br />
        [] --{">"} "no one likes this"
        <br />
        ["Peter"] --{">"} "Peter likes this"
        <br />
        ["Jacob", "Alex"] --{">"} "Jacob and Alex like this"
        <br />
        ["Max", "John", "Mark"] --{">"} "Max, John and Mark like this"
        <br />
        ["Alex", "Jacob", "Mark", "Max"] --{">"} "Alex, Jacob and 2 others like
        this"
        <br />
        Note: For 4 or more names, the number in "and 2 others" simply
        increases.
      </div>
      <h3>Ruby</h3>
      <SyntaxHighlighter language={"ruby"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

const Kata2 = () => {
  return (
    <>
      <CategorizeNewMember />
      <TwoToOne />
      <WriteNumberInExpandedForm />
      <EqualSidesOfAnArray />
      <WhoLikesIt />
    </>
  );
};

export default Kata2;
