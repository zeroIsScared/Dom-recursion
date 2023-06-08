'use strict';

const find = (element, what) => {
    let content = element.childNodes[0].textContent.trim();
    console.log(
        `visiting '${content}'`
    );

    if( what == content) {
        return element;
    }
    
    let found = null;

    Array.from(element.children).forEach(element => {
        found = find(element, what) ?? found;
});
return found;
    
}

let found = find(root, '1.2.1');
console.log(`Found it in element:`, found);