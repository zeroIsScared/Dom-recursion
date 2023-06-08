// DOM data sets

const setData = (element, key, value)=>{
element.dataset[key]= value;
}

const getData = (element, key) => {
    return element.dataset[key]
}

//HW1. removeData(element,key)
 const removeData= (element,key) =>{
  delete element.dataset[key];
 }

 setData(root,'height', 100);
 console.log(getData(root,'height'));
 removeData(root,'height');
 setData(root,'width', 200);
 console.log(getData(root,'height'));