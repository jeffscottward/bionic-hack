import { bionicText } from './modules/bionic';

// console.log('Content script works!');
// console.log('Must reload extension for modifications to take effect.');

let elements = document.querySelectorAll(
  'body *:not(script, noscript, canvas, embed, iframe, object, svg, video, audio, canvas, meta, link, title, style, head, html)'
);

// for all elements
for (let i = 0; i < elements.length; i++) {
  let element = elements[i];

  // for each elements children
  for (let j = 0; j < element.childNodes.length; j++) {
    // get child node
    let node = element.childNodes[j];

    // if node is text
    if (node.nodeType === 3) {
      // get the text
      let text = node.nodeValue;
      let newNode = document.createElement('span');
      newNode.innerHTML = bionicText(text);
      node.replaceWith(newNode);
    }
  }
}
