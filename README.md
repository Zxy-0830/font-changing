# Font-chaning Web Application

**Font-changing** is a simple web application designed to help IT students understand basic DOM manipulation and interactivity using HTML, CSS, and JavaScript. In this project, you can dynamically 
adjust the style of a heading by toggling text case, switching bold on/off, increasing or decreasing font size, changing font families, and resetting the styles to default.

## Project Overview

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
- **Buttons:** `uppercase`, `bold`, `increase`, `decrease`, and `reset` represent the controls for toggling case, toggling bold, adjusting font size, and resetting styles.
- **selecthere:** The dropdown element used to select different font families.

  ## 2. Main Functionalities

### 2.1 Toggle Case Functionality (`upcase` function)

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

uppercase.addEventListener('click', () => {
  upcase();
});

Description:
This function toggles the heading text between uppercase and lowercase.

Key Points:

Uses toUpperCase() and toLowerCase() to determine the current state.

Changes the text accordingly and updates the button label to reflect the next action.

Calls the helper function buttonfunction() at the beginning to clear any reminders and reset the font size buttons.
