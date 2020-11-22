const a = document.querySelector(".a-js");
a.textContent += " mozilla developer network";
a.href = 'https://developer.mozilla.org';
a.target = "_blank";

// ------------------------------------------------

const para = document.createElement("p");
para.textContent = "this is paragraph by javascript."
document.body.append(para);

// only text node can be appended inside p,
// trying to append plain string will throw error.
const text = document.createTextNode(' — the premier source for web development knowledge.');
para.appendChild(text);

// output: <p>this is paragraph by javascript. — the premier source for web development knowledge.</p>

// ------------------------------------------------

// this makes an element move to last child of parent
document.body.append(a);

const a1 = a.cloneNode();
a1.textContent = " -- new clone from above link";
a1.prepend(document.createElement("br"));
document.body.appendChild(a1);

// append() allows you to also append DOMString objects, whereas Node. appendChild() only accepts Node objects. append() has no return value, whereas Node. appendChild() returns the appended Node object

// ------------------------------------------------

// remove direct element ----
// para.remove();

// This method is not supported in older browsers. They have no method to tell a node to remove itself, so you'd have to do the following. ----
// para.parentNode.removeChild(para);

// remove child element ----
// document.body.removeChild(para);

// ------------------------------------------------

// style sheets linked to document
let styles = document.styleSheets;
console.log(styles[0].href);

// inline styling from javascript
// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';


para.setAttribute("class", "highlight");


