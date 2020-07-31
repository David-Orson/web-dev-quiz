export const questions = [
  {
    id: 1,
    q: "Inside which HTML element do we put the JavaScript?",
    a1: "<javascript>",
    a2: "<js>",
    a3: "<scripting>",
    a4: "<script>",
  },
  {
    id: 2,
    q:
      "What is the correct JavaScript syntax to change the content of the HTML element: <p id='demo'>This is a demonstration.</p>? document.get:",
    a1: "Element('p').innerHTML = 'Hello World!'",
    a2: "ElementById('demo').innerHTML= 'Hello World!'",
    a3: "ElementByName('p').innerHTML = 'Hello World!'",
    a4: "#demo.innerHTML = 'Hello World!'",
  },
  {
    id: 3,
    q: "Where is the correct place to insert a JavaScript?",
    a1: "The <body> section",
    a2: "The <head> section",
    a3: "Both the <head> section and the <body> section are correct",
    a4: "b4",
  },
  {
    id: 4,
    q:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a1: "<script src='xxx.js'>",
    a2: "<script href='xxx.js'>",
    a3: "<script name='xxx.js'>",
    a4: "b4",
  },
  {
    id: 5,
    q: "The external JavaScript file must contain the <script> tag?",
    a1: "True",
    a2: "False",
    a3: "b3",
    a4: "b4",
  },
  {
    id: 6,
    q: "How do you write 'Hello World' in an alert box?",
    a1: "msgBox('Hello World');",
    a2: "msg('Hello World');",
    a3: "alertBox('Hello World');",
    a4: "alert('Hello World');",
  },
  {
    id: 7,
    q: "How do you create a function in JavaScript?",
    a1: "function:myFunction()",
    a2: "function myFunction()",
    a3: "function = myFunction()",
    a4: "b4",
  },
  {
    id: 8,
    q: "How do you call a function named 'myFunction'?",
    a1: "call function myFunction()",
    a2: "call myFunction()",
    a3: "myFunction()",
    a4: "b4",
  },
  {
    id: 9,
    q: "How do you write an IF statement in JavaScript?",
    a1: "if i = 5",
    a2: "if i = 5 then",
    a3: "if (i == 5)",
    a4: "if i ==5 then",
  },
  {
    id: 10,
    q:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    a1: "if i <> 5",
    a2: "if (i != 5)",
    a3: "if (i <> 5)",
    a4: "if i =! 5 then",
  },
];

export const correct = [4, 2, 3, 1, 2, 4, 2, 3, 3, 2];
