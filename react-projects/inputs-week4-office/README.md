🤖 Challenge: Listening Robot
As a developer, you are tasked with creating an application where three "robots" are listening to the text that a user types. As the user types, each robot responds in real time with a different modification to the input.

When creating a project it is important to think about organizing your code so that you are not repeating yourself unnecessarily. It is a best practice to separate and compartmentalize all the actions in your code. In this application, App.js will handle the state values, inputs, and event listener method. Each robot will be in its own display component. The state value can be passed to the nested components where the individualized manipulation of words can be handled by each robot.

📚 User Stories
- As a user, I can see a landing page with heading and a text input.
commit: landing page

As a user, I see titles of three robots waiting for my text.
commit: robot titles

As a user, I see my "Good Robot" repeating exactly what I type in real time.
commit: good robot
- need to store what the user is typing, using state variable called userInput
- reference the variable under the Good title

Pseudo-code
- create a function called handleChange
- input: DOM event from the onChange attribute from the input tag
- output: set the value of the state variable to be the user input

As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
- check the pattern, every 3rd index the letter repeats
- index + 3 
- input:  A l o h a !
- output: B L A B L A
- index:  0 1 2 3 4 5
- logic will be very long to change value solely based on index

- looking at index and comparing the remainder of dividing each index by 3 is the same at every 3rd index
- indexes for B: 0, 3, modulo % 3 = 0
- indexes for L: 1, 4, modulo % 3 = 1
- indexes for A: 2, 5, modulo % 3 = 2


Pseudo-code
- create a function called badText
- input: a string which is the value of the state variable userInput
- output: a string which is "B", "L", or "A" replacing each character the user typed
- for loop will provide numbers for us to reference the indexes of the string the user types
-
- we will reassign the value based on the remainder of dividing the index by 3
return "B" for remainder of 0
return "L" for remainder of 1
return "A" for remainder of 2 

- potential refactor
```js
  const badRobot = (input) => {
    const bla = ["B", "L", "A"]
    return input.split("").map((value, index) => {
      // "aloha" --> ["a", "l", "o", "h", "a"] 
      // index:       0    1    2    3   4
      return bla[index % bla.length]}).join("")
      // bla[0 % 5 ]
      // bla[0]
      // "B"
      // bla[1 % 5 ]
      // bla[1]
      // "BL"
    
  }
```

As a user, I see a third robot that modifies the input as per the developer's choice in real time.
🏔 Stretch Goals
As a user, I see a fourth robot that modifies the input as per the developer's choice in real time.
As a user, I can see pleasant stylings on the application.
👩‍💻 Developer Stretch Goals
As a developer, I have a well commented application.
As a developer, I have well written README file with instructions on how to access my repository.
As a developer, my variables are all named semantically.
As a developer, I have refactored and efficient code.
As a developer, I have my application deployed as a live website.
