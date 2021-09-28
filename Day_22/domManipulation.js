//DOM manipulation
var selectBox = document.getElementById('box1')
selectBox
console.log(typeof selectBox)
// 'object'

//All the methods and properties of selectBox object
console.dir(selectBox)
var newParagraph = document.createElement('p')
console.log(newParagraph);
console.dir(newParagraph);

//Text inside paragraph
newParagraph.textContent = 'Text inside newParagraph'
console.dir(newParagraph);

var newDiv = document.createElement('div')
console.dir(newDiv)

//Adding html 
newDiv.innerHTML = 'DOM Manipulation is Fun!';
console.dir(newDiv)

newDiv.innerHTML = '\nDOM Manipulation is Fun!\n';
newDiv.classList.add('new-div')

newDiv.classList += ' new-new-div'
// 'new-div new-new-div'
newDiv.classList.remove('new-div')

//Adding className in a element
newDiv.className = newDiv.className.replace(/new-new-div$/,'m-new-div');
newDiv.setAttribute('data-attr','something');

newDiv.setAttribute('data-attr','somethingElse');

console.log(newDiv)
{/* <div class=​"m-new-div" data-attr=​"somethingElse">​ DOM Manipulation is Fun! ​</div>​ */}
newDiv.removeAttribute('class')

console.log(newDiv)
{/* <div data-attr=​"somethingElse">​ DOM Manipulation is Fun! ​</div>​ */}

//Adding styles
console.dir(newDiv.style)

newDiv.style.backgroundColor = '#200';
console.dir(newDiv.style);

newDiv.style.color = '#2ff';
console.log(newDiv);
{/* <div data-attr=​"somethingElse" style=​"background-color:​ rgb(34, 0, 0)​;​ color:​ rgb(34, 255, 255)​;​">​ DOM Manipulation is Fun! ​</div>​ */}

//Inserting element : 1
var box1 = document.getElementById('box1');

box1.insertAdjacentElement('afterbegin',newDiv);
box1.insertAdjacentElement('beforebegin',newDiv);
box1.insertAdjacentElement('afterbegin',newDiv);
box1.insertAdjacentElement('beforeend',newParagraph)
var box2 = document.getElementById('box2');

box2.insertAdjacentElement('beforebegin',newDiv);

//Inserting element : 2
box1.appendChild(box2);
var box1h4 = document.querySelector('#box1 h4');

box1.insertBefore(box2,box1h4)
console.dir(box1)

//Removing before and after element of an element
newParagraph.previousElementSibling.remove()
// newParagraph.nextElementSibling.remove()

console.log(box1);
{/* <div id=​"box1" class=​"box" data-atr=​"box1" data-extra=​"attrToRemove">​<p>​Text inside newParagraph​</p>​</div>​ */}
box1.childNodes[1].remove()

box1.childNodes[0]
// " "