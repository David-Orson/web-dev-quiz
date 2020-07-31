export const questions = [
  {
    id: 1,
    q: "Inside which HTML element do we put the JavaScript?",
    questionAnswers: {
      a: "<javascript>",
      b: "<js>",
      c: "<scripting>",
      d: "<script>",
    },
  },
  {
    id: 2,
    q:
      "What is the correct JavaScript syntax to change the content of the HTML element: <p id='demo'>This is a demonstration.</p>? document.get:",
    questionAnswers: {
      a: "Element('p').innerHTML = 'Hello World!'",
      b: "ElementById('demo').innerHTML= 'Hello World!'",
      c: "ElementByName('p').innerHTML = 'Hello World!'",
      d: "#demo.innerHTML = 'Hello World!'",
    },
  },
  {
    id: 3,
    q: "Where is the correct place to insert a JavaScript?",
    questionAnswers: {
      a: "The <body> section",
      b: "The <head> section",
      c: "Both the <head> section and the <body> section are correct",
    },
  },
  {
    id: 4,
    q:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    questionAnswers: {
      a: "<script src='xxx.js'>",
      b: "<script href='xxx.js'>",
      c: "<script name='xxx.js'>",
    },
  },
  {
    id: 5,
    q: "The external JavaScript file must contain the <script> tag?",
    questionAnswers: {
      a: "True",
      b: "False",
    },
  },
  {
    id: 6,
    q: "How do you write 'Hello World' in an alert box?",
    questionAnswers: {
      a: "msgBox('Hello World');",
      b: "msg('Hello World');",
      c: "alertBox('Hello World');",
      d: "alert('Hello World');",
    },
  },
  {
    id: 7,
    q: "How do you create a function in JavaScript?",
    questionAnswers: {
      a: "function:myFunction()",
      b: "function myFunction()",
      c: "function = myFunction()",
    },
  },
  {
    id: 8,
    q: "How do you call a function named 'myFunction'?",
    questionAnswers: {
      a: "call function myFunction()",
      b: "call myFunction()",
      c: "myFunction()",
    },
  },
  {
    id: 9,
    q: "How do you write an IF statement in JavaScript?",
    questionAnswers: {
      a: "if i = 5",
      b: "if i = 5 then",
      c: "if (i == 5)",
      d: "if i ==5 then",
    },
  },
  {
    id: 10,
    q:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    questionAnswers: {
      a: "if i <> 5",
      b: "if (i != 5)",
      c: "if (i <> 5)",
      d: "if i =! 5 then",
    },
  },
];

export const correct = [3, 1, 2, 0, 1, 3, 1, 2, 2, 1];
