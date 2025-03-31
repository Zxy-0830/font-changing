# Font-chaning Web Application

**Font-changing** is a simple web application designed to help IT students understand basic DOM manipulation and interactivity using HTML, CSS, and JavaScript. In this project, you can dynamically 
adjust the style of a heading by toggling text case, switching bold on/off, increasing or decreasing font size, changing font families, and resetting the styles to default.
This is the link to the page:  https://zxy-0830.github.io/font-changing/

## Project Overview
https://github.com/Zxy-0830/font-changing/blob/main/README.md
This project was built to showcase a concept that is both intriguing and beneficial for IT students who are learning front-end development. The application provides a hands-on example of:
- Changing text case (uppercase/lowercase)
- Toggling bold styling
- Adjusting font size with limits
- Switching between different font families
- Resetting to default styles

All interactions are handled by JavaScript, and the application’s layout is styled using CSS.

## Features

- **Case Toggle:**  
  Toggle the heading text between uppercase and lowercase. The button text updates to indicate the next action.

- **Bold Toggle:**  
  Switch the font weight between normal and bold, with the button label reflecting the current state.

- **Font Size Adjustment:**  
  Increase or decrease the heading's font size by 5px with each click, while enforcing a minimum of 20px and a maximum of 100px. When a limit is reached, a reminder message is displayed, and the corresponding button is disabled.

- **Font Family Selection:**  
  Change the heading’s font by selecting an option from the dropdown menu.

- **Reset Functionality:**  
  Reset all modifications (text case, font weight, font size, and font family) back to the default values.

# Functionality Analysis – JavaScript Code

This section provides a detailed analysis of the JavaScript code used in the project. The code dynamically controls the styling of a heading element on the page, allowing users to toggle text case, adjust font weight, change font size, switch font families, and reset the styles to default. Below is a breakdown of the key functions and their purposes.

## 1. Variable Declaration and DOM Element Selection

At the beginning of the code, several key DOM elements are obtained using `document.getElementById`:
- **heading:** The element displaying the main text (with id "heading").
- **remind:** The element used to show reminder messages (with id "remindhere").
- **Buttons:** uppercase, bold, increase, decrease, and reset represent the controls for toggling case, toggling bold, adjusting font size, and resetting styles.
- **selecthere:** The dropdown element used to select different font families.

  ## 2. Main Functionalities

### 2.1 Toggle Case Functionality 

```js
function upcase() {
  buttonfunction();
  if (heading.textContent === heading.textContent.toUpperCase()) {
    heading.textContent = heading.textContent.toLowerCase();
    uppercase.innerText = 'uppercase';
  } else if (heading.textContent === heading.textContent.toLowerCase()) {
    heading.textContent = heading.textContent.toUpperCase();
    uppercase.innerText = 'lowercase';
  }
}
```
Description:
This function toggles the heading text between uppercase and lowercase.

Key Points:
Uses toUpperCase() and toLowerCase() to determine the current state.
Changes the text accordingly and updates the button label to reflect the next action.
Calls the helper function buttonfunction() at the beginning to clear any reminders and
reset the font size button


2.2 Toggle Bold Functionality (getbold function)

```js
function getbold() {
  buttonfunction();
  if (window.getComputedStyle(heading).fontWeight === "400") {
    heading.style.fontWeight = 'bolder';
    bold.innerText = 'unbold';
  } else if (window.getComputedStyle(heading).fontWeight === "700") {
    heading.style.fontWeight = 'normal';
    bold.innerText = 'bold';
  }
}

bold.addEventListener('click', () => {
  getbold();
});
```

Description:
This function toggles the heading's font weight between normal (400) and bold (700).

Key Points:
Utilizes window.getComputedStyle to get the current fontWeight of the heading.
Switches the style and updates the button text to indicate the current state.

### Bold Toggle Functionality Modification

Due to some system issues on my computer, the original code for toggling the bold state 
did not work as expected. Therefore, I decided to use ChatGPT to modify the code to achieve
the desired effect. Below is the original code that was used for the bold toggle functionality:

```js
function getbold() {
  buttonfunction();
  if(heading.style.fontWeight = 'unbold' ) {
    heading.style.fontWeight = 'bolder'
    bold.innerText = 'unbold';
  } else if(heading.style.fontWeight = 'bold' ) {
    heading.style.fontWeight = 'normal'
    bold.innerText = 'bold';
  }
}
```

2.3 Font Size Adjustment (crase and decrase functions)

```js
const minSize = 20;
const maxSize = 100;
let currentSize = 50;

function crase() {
  if (currentSize < maxSize) {
    buttonfunction();
    currentSize += 5;
    heading.style.fontSize = currentSize + 'px';
  } else {
    remind.innerText = 'you have reached the maxmium fontsize';
    increase.disabled = true;
  }
}

function decrase() {
  if (currentSize > minSize) {
    buttonfunction();
    currentSize -= 5;
    heading.style.fontSize = currentSize + 'px';
  } else {
    remind.innerText = 'you have reached the minmium fontsize';
    decrease.disabled = true;
  }
}

increase.addEventListener('click', () => {
  crase();
});

decrease.addEventListener('click', () => {
  decrase();
});
```

Description:
These functions adjust the font size of the heading in steps of 5px, with the font size 
constrained between 20px and 100px.

Key Points:
currentSize stores the current font size.
Increases or decreases the font size while checking the limits.
Displays a reminder message and disables the corresponding button if a limit is reached.

2.4 Font Family Selection and Reset Functionality

```js
selecthere.addEventListener('change', () => {
  heading.style.fontFamily = selecthere.value;
});

function redo() {
  buttonfunction();
  heading.style.fontFamily = 'Arial, Helvetica, sans-serif';
  heading.style.fontSize = '50px';
  heading.style.fontWeight = 'normal';
  heading.textContent = heading.textContent.toLowerCase();
  selecthere.selectedIndex = 0;
}

reset.addEventListener('click', () => {
  redo();
});
```

Description:
The dropdown menu changes the heading’s font family when a new option is selected.
The redo() function resets all styles to default, including font family, font size,
 font weight, and text case.

Key Points:
The dropdown change event updates the fontFamily property.
The reset functionality restores all styling and resets the dropdown selection.

2.5 Helper Function: buttonfunction()

```js
function buttonfunction() {
  remind.innerText = '';
  increase.disabled = false;
  decrease.disabled = false;
}
```

Description:
This helper function is called at the beginning of most operations to clear any existing 
reminder messages and re-enable the font size buttons.

Key Points:
Ensures a clean state before performing any further operations.


##3.Summary
The JavaScript code demonstrates how to:
Dynamically toggle text case.
Switch font weight between normal and bold.
Adjust the font size within a specified range.
Change the font family based on user selection.
Reset all styles to their default values.

This project provides a clear example of DOM manipulation and event handling in JavaScript, 
making it a valuable learning tool for IT students.

![image](https://github.com/user-attachments/assets/a1496b5d-4ff8-4864-9575-89c23a4609b6)

