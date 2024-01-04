//Create some html elements with Id and class
//From js use getelementById, getElementByClassName and querySelector to access and modify the html
//Use methods like forEach to loop over class elements

// Outputs the global window object
console.log(window); 

// Log a simple message to the console
console.log("DOM Example"); 

// Log a message to the console using the window.console.log syntax
window.console.log("DOM Example"); 
// In a browser, window is the global object, so console.log("DOM Example") implies window.console.log("DOM Example").Omitting window prefix is common, but for window-specific events like resize, explicit mention is needed.
window.addEventListener("resize", () => console.log("Window resized"));

// Log the entire HTML document object to the console
console.log(document); 

// Both document and window.document are the same, as document is part of the window object itself
console.log(window.document);

//In summary, document is specifically related to the structure and content of the HTML document, while window is a broader object representing the entire browser environment. Both are crucial in web development, and you often use them together to create dynamic and interactive web pages.

// Log the root HTML element (<html>) of the document
console.log(document.documentElement); //what does this do?? but it is logging all html elememts

// Create a new paragraph element using JavaScript
const newParagraphElement = document.createElement("p");
console.log(newParagraphElement);

// The above code creates a new HTML paragraph element in JavaScript and logs it to the console.

// You can add text content in multiple ways: innerHTML for HTML content, innerText for plain text content.

// Set the inner HTML content of the new paragraph element
// The following line sets the HTML content of the new paragraph element, allowing for the inclusion of HTML tags within the content.
newParagraphElement.innerHTML = "<b>Added paragraph element from JS using DOM and added bold formatting</b>";

// Append the newly created paragraph element to the body of the HTML document
document.body.appendChild(newParagraphElement);

// The above line adds the newly created paragraph element to the end of the body in the HTML document.

// The following line overrides the previous content and sets new plain text content for the paragraph element.You can observe the change by comparing the content before and after commenting out this line.
//newParagraphElement.innerText = "Updated text content using innerText in JS";

// Retrieve elements with the class name "paragraph" and store them in the paraElements variable
let paraElementsByClass = document.getElementsByClassName("paragraph"); // HTMLCollection

// Log the collection of elements to the console
console.log(paraElementsByClass);
//console.log(typeof(paraElementsByClass));

// Apply a grey color to the text of the first element with the class "paragraph"
paraElementsByClass[0].style.color = "grey";

// Update the HTML content of the second element with the class "paragraph", adding bold formatting
paraElementsByClass[1].innerHTML = "Modifying HTML using the DOM (Document Object Model) structure is one of the <b>primary</b> use cases for JavaScript in web development. The DOM provides a way for JavaScript to dynamically manipulate the content and structure of a web page. <b>- updated content using innerHTML</b>";

// The following lines are incorrect:
// paraElementsByClass.style.color="red"; // This will result in an error since paraElementsByClass is a collection, not a single element
//paraElementsByClass.forEach(element => element.style.color = "red"); // This will result in an error too, as getElementsByClassName returns a collection, not an array

// To apply a style to all elements in the collection, you can convert the collection to an array:
const typecastedparaElementsByClass = Array.from(paraElementsByClass);

// Log the array of elements to the console
console.log(typecastedparaElementsByClass);
//console.log(typeof(typecastedparaElementsByClass));
//const a=[1,2];
//console.log(typeof(a));

// Apply a grey color to the text of all elements using forEach on the array
typecastedparaElementsByClass.forEach(element =>  element.style.color = "grey");

// Retrieve element with the ID name "mainParagraph" and store them in the paraElementsById variable
let paraElementsById = document.getElementById("mainParagraph"); // Single Element or null

// Log the collection of elements to the console
console.log(paraElementsById);

// Apply a black color to the text of the first element with the class "paragraph"
paraElementsById.style.color = "black"; //para

// Update the HTML content of the  element with the id "mainParagraph", adding bold formatting
paraElementsById.innerHTML = "The <b>Document Object Model (DOM)</b> in JavaScript is like a tree-like structure that represents a webpage. Each part of the page, like paragraphs, images, and buttons, is a node in this tree. You can use JavaScript to interact with and change these nodes. For example, you can add new content to a webpage, change the text in a paragraph, or make a button do something when clicked. The DOM helps JavaScript talk to and control the elements on a webpage";

// Select the first paragraph element in the document using querySelector and set its background color
const selectedFirstParagraphElement = document.querySelector('p');
selectedFirstParagraphElement.style.backgroundColor = "#f5f5f5";

// Select the element with the ID "mainParagraph" using querySelector and set its text color
const selectedParaElementById = document.querySelector('#mainParagraph');
selectedParaElementById.style.color = "#0066cc";

// Select all elements with the class "paragraph" using querySelectorAll
const selectedAllParaElementByClass = document.querySelectorAll('.paragraph');
// Log the collection of elements with the class "paragraph" to the console
console.log(selectedAllParaElementByClass);
// Apply background color to each element with the class "paragraph"
selectedAllParaElementByClass.forEach(element => element.style.backgroundColor = "#ffcc00");

//Note: It's generally better practice to use querySelector for IDs.Using querySelector for IDs is more efficient, clear, and aligns with standards, as IDs are expected to be unique, and querySelector stops searching after finding the first match.

//querySelector: Returns a single element or null.
//querySelectorAll: Returns a static NodeList of all matching elements.
//getElementsByClassName: Live HTMLCollection of matching elements.
//getElementById: Single element or null.


