Project name :  DevStack

***A little description: 

DevStack is a modern developer-focused platform for exploring popular technologies and development tools.It allows users to discover technologies based on category, difficulty, rating, and popularity.Users can add their favorite technologies to personalized “Your Stack” and manage them easily.The project provides a clean, responsive, and user-friendly interface built with React and Tailwind CSS.DevStack helps developers organize their technology choices and build their ideal development stack.


***Technology that i know:-
React
TypeScript
JavaScript
Tailwind CSS
HTML
CSS
Node.js
Git
GitHub
Vite


***Features of the Project
Technology Exploration – Explore popular technologies by category, rating, and difficulty.
Personalized Stack – Add and remove favorite technologies from your personal stack.
Interactive UI – Get toast notifications and visual feedback when adding or removing technologies.

***2:-

1.  JSX stands for JavaScript XML and is a syntax extension used in React.It allows developers to write HTML-like code inside JavaScript.JSX makes React code easier to read and understand.It helps developers describe how the user interface should look.JSX is converted into JavaScript code before it runs in the browser.

2.   Props are data passed from a parent component to a child component.Props are read-only and cannot be directly changed by the child component.State is data managed inside a component and can change over time.
When state changes, React re-renders the component to update the UI.In short, props are passed from outside, while state is managed inside the component.

3:    
The useState hook is used to create and manage state in a React component.It allows us to store data that can change over time.
When the state changes, React automatically re-renders the component.In this project, I used useState to manage  technologies added to the “Your Stack” section.It also updates  stack when a technology is added or removed.

4:

The useEffect hook is used to perform side effects in a React component.It is commonly used for tasks like fetching data from an API or loading JSON data.In this project, I used it to load technology data from a JSON file.
It helped fetch the data after  component was rendered.Then, the fetched data was stored in state and displayed as technology cards.

5:
The key prop helps React identify each item in a list.It tells React which items have changed, been added,  removed.This helps React update the UI efficiently.Each key should be unique among the list items.Without a proper key, React  show warnings and handle updates less efficiently.

6:
Conditional rendering means showing different UI based on a condition.
It helps us display content only when a specific condition is true.
I used it to show a message when the stack is empty.
For example, stack.length === 0 shows the “Your stack is empty” message.
When items are added,  empty message disappears and the stack items are displayed.

7:
A parent component passes data to a child component using props.
The child component receives and uses those props as needed.
To send data back, the parent passes a callback function  a prop.
The child calls that function with the data it wants to send back.
This allows the parent and child components to communicate effectively.

 Technology i Can Use-

React.js — Build the user interface and manage components.

Tailwind CSS & DaisyUI — Design and style the application.

TypeScript / JavaScript (ES6+) — Write the application logic.

React-Toastify — Show toast notifications for user actions.

JSON — Store and load technology data.
Vite — Fast development and build tool.