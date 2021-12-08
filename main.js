let form = document.querySelector('.add-form');
let list = document.querySelector('.list')
let inputValue = document.querySelector(".add-input");
let allBtn = document.querySelector('.all-btn');
let completeBtn = document.querySelector('.complete-btn');
let incompleteBtn = document.querySelector('.incomplete-btn');


// events
form.addEventListener('submit', getValue);

//adding elements
function getValue(e) {
  e.preventDefault();
  
  let item = document.createElement("li");
  let btnRemove = document.createElement("i");
  btnRemove.classList.add('bx', 'bx-x', 'remove-icon')
  let itemText;
  let itemInnerText = document.createElement("p");
  
  if (inputValue.value == false) {
    alert('cannot add empty value')
  } else {
    itemText = document.createTextNode(inputValue.value);
  }

  inputValue.value = ''
  itemInnerText.appendChild(itemText)
  item.classList.add('item');
  item.appendChild(itemInnerText);
  item.appendChild(btnRemove);
  document.querySelector('.list').appendChild(item);

  // checking element
  item.addEventListener('click', check);
  
  function check() {
    
    itemInnerText.classList.toggle('checked')
    
    if (btnRemove.classList.contains('bx-x')) {
      btnRemove.classList.remove('bx-x');
      btnRemove.classList.add('bx-check');
    } else {
      btnRemove.classList.remove('bx-check');
      btnRemove.classList.add('bx-x');
    }
  }

  //deleting 
  btnRemove.addEventListener('click', function deleteItem() {
    item.classList.add('item-exit')
    setTimeout(removeItem, 500)
    function removeItem () {
    btnRemove.parentNode.remove();
    }
  })
}

// sorting
completeBtn.addEventListener('click', (e) => {
  let listItems = document.querySelectorAll('.item')
  listItems.forEach(function (item) {
    let checked = item.lastElementChild.classList.contains('bx-check');
    if (checked) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
})

incompleteBtn.addEventListener('click', (e) => {
  let listItems = document.querySelectorAll('.item')
  listItems.forEach(function (item) {
    let checked = item.lastElementChild.classList.contains('bx-check');
    if (checked) {
      item.style.display = 'none'
    } else {
      item.style.display = 'flex'
    }
  })
})

allBtn.addEventListener('click', (e) => {
  let listItems = document.querySelectorAll('.item')
  listItems.forEach(function (item) {
    item.style.display = 'flex'
  })
})



