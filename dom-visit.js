'use strict';

const visit = (element) => {
    //HW1. explain 'element.childNodes[0].textContent.trim()'

    //Here was used 'element.childNodes[0].textContent.trim()' because it was needed to capture the text content that is not an element 
    //of given element in case element has no child elements, and trim() was used to get rid of unnecessary space that is retuned alongside text
    // when using textContent.

    console.log(
        `visiting ${element.childNodes[0].textContent.trim()}`
    )


    //HW2. refactor the code using Array.forEach()
    // for (let index = 0; index < element.children.length; index++) {
    //     visit(element.children[index]);
    // } 

    let elements = [].slice.call(element.children);

    elements.forEach((element) => {

        visit(element);

    });
}


// using DFS///
visit(root);