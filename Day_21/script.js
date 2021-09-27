//Selecting by ID
const selectingWithQuery = document.querySelector('#first-title');
console.log(typeof selectingWithQuery,selectingWithQuery);

//Selecting by class 
//Getting only the first element 
const selectingWithClass = document.querySelector('.title');
console.log(selectingWithClass);

//For getting all the elements of a class : returns a node list
const selectingWithClassNodeList = document.querySelectorAll('.title');
console.log(typeof selectingWithClassNodeList,selectingWithClassNodeList);
//converting the nodelist to array
const classArray = Array.prototype.slice.call(selectingWithClassNodeList);
console.log(classArray);


// Selecting by id
const selectingWithId = document.getElementById('second-title');
console.log('Id : ',selectingWithId);

//Selecting by className
const selectingWithClassName = document.getElementsByClassName('title');
console.log(selectingWithClassName);
//Converting HTML collection to array
const classElements = Array.prototype.slice.call(selectingWithClassName);
console.log(classElements);

//Selecting by TagName
const titles = document.getElementsByTagName('h1');
console.log(titles,titles.length,typeof title);

// Selecting by multiple tag
const divSelector = document.querySelector('div');
console.log(divSelector);

//Returns a nodeList
const multiElementSelector = document.querySelectorAll('p,ul,h3');
const multiElementArray = Array.prototype.slice.call(multiElementSelector);
console.log(multiElementArray);

//Parent-Child element selector
const parentElement = document.getElementById('div1');
console.dir(parentElement);
// p.children ==> att & p.childNodes ==> att+text
console.log(parentElement.children,parentElement.childNodes);
console.log(parentElement.children[1]);

// Selecting a specific child
const definedChild = document.querySelector('#div1 li');
const definedMultiChild = document.querySelectorAll('#div1 li, #div1 h3');
console.log(definedChild);
console.log(definedMultiChild);

//If there are multiple child with same tag selecting immediate child
const allTagSelector = document.querySelectorAll('#div1 li')
const uniqueTagSelector = document.querySelectorAll('#div1>li')
console.log(allTagSelector,uniqueTagSelector);




