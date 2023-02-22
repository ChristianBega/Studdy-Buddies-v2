const Subtopics = require("../models/Subtopics");

const subtopicData = [
  //Variables

  {
    subtopic_name: "variables",
    description:
      "In JavaScript, variables are used to store data.This data can be booleans, numbers, characters, and strings of characters, known as strings. Variables are declared using var <variableName> = data (see code example A). Additionally, variables can be manipulated using Operators(+, -, *, /). Given two variables containing numbers, operators can be used to perform math equations (see code example B). Given two variables containing strings, the + operator can be used to combine the strings (see code example C).",
    code_examples: [
      "Example A : var myVariable = 'Hello world!'; console.log(myVariable); 'Hello world!' will be logged into the console",
      "Example B : var numOne = 2; var numTwo = 3; console.log(numOne * numTwo); 6 will be logged into the console",
      "Example C : var introduction = 'Hi, my name is '; var name = 'Ryan'; var sentence = introduction + name; console.log(sentence); 'Hi, my name is Ryan' will be logged into the console",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://www.w3schools.com/js/js_variables.asp",
      "https://www.w3schools.com/js/js_let.asp",
      "https://www.w3schools.com/js/js_const.asp",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
    ],
    topic_id: 1,
  },
  // Arrays
  {
    subtopic_name: "arrays",
    description:
      "Arrays are used to store groups of data into a single variable. Just like variables, arrays are declared using var; however, brackets [ ] must be used to indicate that it is an array. Arrays are declared as follows: var <arrayName> = [data, data, data] (see code example A). To access each data point in an array, call the array’s variable name followed by brackets containing the index you wish to access (see code example B). Knowing the length of an array is important when accessing data so we don’t attempt to access an index that doesn’t exist. We can find the length of an array by using the .length method (see code example C).",
    code_examples: [
      "Example A : var sports = ['Football”, 'Soccer”, 'Baseball”];",
      "Example B : Important note, the first index which contains 'Football”, is the 0th position in the array. console.log(sports[0]); ”Football” will be logged into the console",
      "Example C : We can also replace data in arrays. sports[2] = 'Swimming”; console.log(sports[2]); ”Swimming” will be logged into the console",
      "Example D : We can also find the length of an array. console.log(sports.length); 3 will be logged into the console",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://www.w3schools.com/js/js_arrays.asp",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      "https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-arrays",
      "https://www.freecodecamp.org/news/tag/arrays/",
    ],
    topic_id: 1,
  },
  //For Loops
  {
    subtopic_name: "for loops",
    description:
      "For loops are used in JavaScript to execute code more than one time. A for loop is declared using for (var i=<number>; i < <number>; i++) { <code> } (see code example A). Let’s break down the code snippet: for declares the for loop, var i=<number> sets i to the given number, i < <number> means the for loop will execute as long as i is less than the given number, i++ means that each time the for loop executes, i will increment by one.",
    code_examples: [
      "Example A : for(var i = 0; i < 5; i++){console.log('i is currently equal to ' + i);}; Console log: 'i is currently equal to 0'; 'i is currently equal to 1', 'i is currently equal to 2', 'i is currently equal to 3', 'i is currently equal to 4',   On the next iteration of the for loop, i = 5, therefore, 5 is not less than 5, so the for loop will exit",
      "Example B : A common use of for loops is to access all the data inside of an array var colors = ['Red', 'Blue', 'Green']; for(var i=0; i < colors.length; i++) {console.log(colors[i]);} Console log: 'Red', 'Blue', 'Green'",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
      "https://www.w3schools.com/js/js_loop_for.asp",
      "https://www.freecodecamp.org/news/javascript-for-loops/",
    ],
    topic_id: 1,
  },
  //Functions
  {
    subtopic_name: "functions",
    description:
      "Functions are reusable blocks of code that perform a specific task. Functions are declared using function <functionName>(<parameters>) { <code>} (see example A). Parameters are placeholders for data that is passed into a function. The data passed into the parameters are known as arguments. Functions will execute until they have reached the last line of code, or until they reach a return statement. Return statements will return data from the function’s scope to the global scope (see the scope subtopic).",
    code_examples: [
      "Example A : function addNumbers (numOne, numTwo) {return(numOne + numTwo);} Now we must call the function and pass in arguments to use it. var sum = addNumbers(2, 4)console.log(sum); 6 will be logged into the console. Side note: numOne and numTwo are the parameters for the function 2 and 4 are the arguments for the function.",
      "Example B : A common use of for loops is to access all the data inside of an array var colors = ['Red', 'Blue', 'Green']; for(var i=0; i < colors.length; i++) {console.log(colors[i]);} Console log: 'Red', 'Blue', 'Green'",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
      "https://www.w3schools.com/js/js_loop_for.asp",
      "https://www.freecodecamp.org/news/javascript-for-loops/",
    ],
    topic_id: 1,
  },
  //Css Selectors
  {
    subtopic_name: "css selectors",
    description:
      "In CSS, selectors are used to choose which element you would like to stylize. There are four ways to select elements in CSS: Universal Selector, Element Selectors, Class Selectors, and ID Selectors. The Universal Selector selects all elements in the HTML document. The Element Selectors select all elements of the same element type. The Class Selectors select all elements with a given class. The ID Selectors select elements with a unique ID.",
    code_examples: [
      "/* Universal Selector */* {font-family: sans-serif;}/* Element Selectors */body {background-color: gray;}section{margin: 25px;}p {font-size: 24px;}/* Class Selectors */.blue-box {background-color: blue;}/* ID Selectors */#red-box {background-color: red;}",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://www.freecodecamp.org/news/css-selectors-cheat-sheet/",
      "https://www.w3schools.com/cssref/css_selectors.php",
      "https://css-tricks.com/almanac/selectors/",
    ],
    topic_id: 2,
  },
  //Css Color
  {
    subtopic_name: "css colors",
    description:
      "Color is an important aspect of CSS to bring your webpage to life. Color can be chosen in 3 different ways: calling the colors name, hex codes, and rgb values. Color names are predefined in CSS such as purple, or yellow. Hex codes are 6 digit values associated with certain colors such as #0000ff for blue, or #ffa500 for orange. Lastly, rgb stands for red green blue. When given three values between 0 and 255, rgb will return a color that matches those combined values. ",
    code_examples: [
      "/* Purple box with yellow text */.purple-box {color: yellow;background-color: purple;}/* Orange box with blue text */.orange-box {color: #0000ff;background-color: #ffa500;}/* Pink box with red text */.pink-box {color: rgb(255, 0, 0);background-color: rgb(255, 0, 255);}",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://www.w3schools.com/cssref/css_colors.php",
      "https://www.w3schools.com/cssref/css_colors_legal.php",
      "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value",
    ],
    topic_id: 2,
  },
  //Css Positioning
  {
    subtopic_name: "css positioning",
    description:
      "In CSS there are 4 different types of positions used to manipulate elements. Static, Relative, Absolute, and Fixed. Static position is the default position, static elements are in the normal flow of the page. Relative position is also in normal flow, but offset to the left, right, top, or bottom based on a given value. Absolute position is removed from normal flow, its position is relative to the parent element’s position and is offset to the left, right, top, or bottom based on a given value. Fixed position is removed from normal flow and will remain at the same position on screen regardless of scrolling and other element’s position. ",
    code_examples: [
      "/* Relative */.relative-box {position: relative;left: 200px;top: 200px;}/* Absolute */.absolute-box {position: absolute;top: 50px;right: 100px;}/* Fixed */.fixed-box {position: fixed;bottom: 0px;right: 0px;}",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://www.w3schools.com/css/css_positioning.asp",
      "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
      "https://css-tricks.com/almanac/properties/p/position/",
    ],
    topic_id: 2,
  },
  //Css Flexbox
  {
    subtopic_name: "css flex box",
    description:
      "Flexboxing is an easier way to create a responsive layout structure in CSS. There are 6 main functions of flexboxing: display, flex-direction, flex-wrap, justify-content, align-items, and align-content. Display enables a flex container. Flex-direction determines the direction of the items in the container. Flex-wrap determines whether elements inside the container should wrap, or not. Justify-content determines how to distribute empty space between items. Align-items determines how items are laid out across the horizontal axis of the container. Align-content determines how items are laid out across the horizontal axis when there is extra space in the container.",
    code_examples: [
      "/* Flex container */.flex-box {display: flex; /* sets the container to flex display */flex-direction: row; /* items in the container will appear in a row from left to right */flex-wrap: nowrap; /* items in the container will not wrap to the next line */justify-content: center; /* items in the container will align at the center of the page */align-items: flex-end; /* items in the container will begin at the bottom of the page */Align-content: space-around; /* items in the container will space themselves evenly */",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      "https://www.w3schools.com/css/css3_flexbox.asp",
      "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",
    ],
    topic_id: 2,
  },
  //Dom Traversal
  {
    subtopic_name: "dom traversal",
    description:
      "DOM stands for Document Object Model. In HTML, all elements are stored in the document object, to access these elements in JavaScript, we must use DOM Traversal. We can do this by using methods on the document object. If we want to access the body of an HTML document we use document.body which will return all of the HTML contained in the body of the document (see example A). We can then access elements contained in the body by using document.body.children[<index>] with the index being the given element we want to access (see example B). This process can become tedious, but JavaScript has built in functions to access specific elements, such as: document.getElementById(<elementId>) to access an element based on its unique ID or document.getElementsByClass(<elementClassName>) to access elements with a given class name (see example C).",
    code_examples: [
      "HTML:<!DOCTYPE html><html lang=”en”><head><meta charset=”UTF-8”><title>Creating Elements</title></head><body><h1>DOM Traversal</h1><ul id= “list”><li>Child0</li><li>Child1</li><li>Child2</liul><body><html>JavaScript://Creates new list item elementvar newElement = document.createElement(“li”);//Adds text content to list itemnewElement.textContent = “Child 3”;//Grabs unordered lielementvarlist =document.getElementById(“list”);//Appends new list item to unordered listlist.appendChild(newElement);New HTML:<!DOCTYPE html><html lang=”en”><head><meta charset=”UTF><title>CreatingElements</title><head><body><h1>DOM Traversal</h1><ul id= “list”><li>Child0</li><li>Child1</li><li>Child2</li><li>Child3</li></ul></body></html>",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://www.w3schools.com/js/js_htmldom_navigation.asp",
      "https://medium.com/codex/how-to-traverse-the-dom-in-javascript-7fece4a7751c",
    ],
    topic_id: 3,
  },
  //Creating Elements
  {
    subtopic_name: "creating dom elements",
    description:
      "In JavaScript, we can create HTML elements and append them to existing HTML elements. We do this by using a built-in function, createElement(), on the document object: document.createElement(<htmlTag>). Then, we can modify the text data of the new element by using <newElement>.textContent = <text>. Once we have created a new element, we can appended it to another element using another built-in JavaScript function, <existingElement>.appendChild(<newElement>).",
    code_examples: [""],
    demo_code: "This is where code demos will go for the subtopic",
    resources: ["https://www.w3schools.com/js/js_htmldom_nodes.asp", "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"],
    topic_id: 3,
  },
  //Event listeners
  {
    subtopic_name: "event listeners",
    description:
      "Event listeners are used to track user activity and execute code once a user triggers the event. Event listeners attach event handlers to specific HTML elements using <element>.addEventListener(<event>, <function> {<code>}). One of the most common events a developer will handle is a “click” event. Click events often occur on buttons. When a button element is clicked that has an event listener attached to it, it will execute the code in the function parameter.",
    code_examples: [
      "HTML:<!DOCTYPE html><html lang=”en”><head><meta charset=”UTF-8”><title>Creating Elements</title></head><body><h1>Event Listeners</h1><button id=btn>Click me!</button></body></html>JavaScript:var button = document.getElementById(“btn”);//When the user clicks the button they will receive a pop-up alert reading “Success!”button.addEventListener(“click”, function() {alert(“Success!”);});",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://www.w3schools.com/js/js_htmldom_eventlistener.asp",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
    ],
    topic_id: 3,
  },
  //Local Storage
  {
    subtopic_name: "local storage",
    description:
      "Local storage is a method built into the document object, it can be used to store data in a user’s browser on their computer. This data will remain on the user's computer even after the session is closed. To use local storage: localStorage.setItem(<key>, <value>). An important note to remember when retrieving data from local storage is that it can only hold string’s, so any data returned will be in string format. To retrieve data, we must use the key we declared in .setItem(). To get data from local storage: localStorage.getItem(<key>) which will return a string of the value we input before. Lastly, localStorage.removeItem(<key>) removes an item from storage and localStorage.clear() clears all data from local storage.",
    code_examples: [
      "var myString = “Hello world!”;localStorage.setItem(message, myString); Local storage will now read: message | “Hello world!” The message key is now paired with the “Hello world!” string var myStorage = localStorage.getItem(message);console.log(message); Console log://Hello world!",
    ],
    demo_code: "This is where code demos will go for the subtopic",
    resources: [
      "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
      "https://www.w3schools.com/jsref/prop_win_localstorage.asp",
      "https://javascript.info/localstorage",
    ],
    topic_id: 3,
  },
];

const seedTopics = () => Subtopics.bulkCreate(subtopicData);

module.exports = seedTopics;
