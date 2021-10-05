const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const checkBox = document.querySelector('[data-type ="checkall"]');
const deleteBox = document.querySelector('[data-type ="deleteall"]');
// console.log(checkBox,deleteBox,itemsList);
function addItem(e){
    e.preventDefault();
    const text = this.querySelector('[name="item"]').value;
    // console.log(item.value);
    const item = {
        text,
        done:false
    }
    items.push(item);
    populatePlate(items,itemsList);
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();
}

function populatePlate(plates = [],platesList){
    platesList.innerHTML =  plates.map((plate,i)=>{
        return `
        <li>
            <input type = "checkbox" data-index = ${i} id = "item${i}"  ${plate.done ? 'checked' : ''}></input>
            <label for="item${i}">${plate.text}</label>
        </li>
        `
    }).join('');
}

function toggleItem(e,isAllChecked = 0){
    console.log(e.target);
    if(!e.target.matches('input')) return;
    
    if(isAllChecked == 0)
    {
        const et = e.target;
        const index = et.dataset.index;
        items[index].done = !items[index].done;
    }
    else if(isAllChecked == 1)
        items.forEach((item) => item.done = true)
    else
        items.forEach((item) => item.done = false)

    localStorage.setItem('items',JSON.stringify(items));
    populatePlate(items,itemsList);
    // console.log(index);

}
function checkAll(){
    // console.log(this.checked);
    this.checked ? toggleItem(event,1) : toggleItem(event,2);
}
function deleteAll(){
    items.splice(0,items.length);
    localStorage.setItem('items',JSON.stringify(items));
    populatePlate(items,itemsList);
}

//Submit & Show item List
addItems.addEventListener('submit',addItem);
populatePlate(items,itemsList);

//Populate the list first as it will fetch data from localStorage
itemsList.addEventListener('click',toggleItem);
checkBox.addEventListener('click',checkAll);
deleteBox.addEventListener('click',deleteAll);