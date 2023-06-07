'use strict';

const visit = (element)=>{
    //HW1. explain 'element.childNodes[0].textContent.trim()'

    //Here was used 'element.childNodes[0].textContent.trim()' because it was needed to capture the text content that is not an element 
    //of given the element, and trim() was used to get rid of unnecessary space that is retuned alongside text when using textContent.
    console.log(
            `visiting ${element.childNodes[0].textContent.trim()}`
    )

    //HW2. refactor the code using Array.forEach()
  //  for(let index =0; index < element.children.length; index++) {
    //    visit(element.children[index]);
   // }
let elements= Array.from(element.children);
console.log(elements)
    elements.forEach(function (item, index) {
        visit(item.children[index])
    });
}

//// using DFS///
visit(root);