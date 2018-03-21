document.addEventListener('DOMContentLoaded',function(){
// delete books
    const list = document.querySelector('#book-list ul')
list.addEventListener('click',function(e){
    if (e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})
// add books
const addForm = document.forms['add-book']
addForm.addEventListener('submit',function(e){
    e.preventDefault()
    //grabbing the value from the form
    const value = addForm.querySelector('input[type="text"]').value

    //create elements
    const li = document.createElement('li')
    const bookName = document.createElement('span')
    const deleteBtn = document.createElement('span')

    // add Content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add Classes
    deleteBtn.classList.add('delete')
    bookName.classList.add('name')
    
    // append to the DOM
    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    //append the new li to the list
    list.appendChild(li)
})

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if (hideBox.checked){
        list.style.display ='none'
    } else {
        list.style.display ='block'
    }
})

const searchBar = document.forms['search-books'].querySelector("input");
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase()
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent
        if (title.toLowerCase().indexOf(term) !== -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})

// var h2 = document.querySelector('#book-list h2')
// h2.addEventListener("click",function(event){
// console.log(event.target);
// console.log(event)
// })
// var buttons = document.querySelectorAll('#book-list .delete');
// buttons.forEach(function(button){
// button.addEventListener('click',function(e){
//  const li = e.target.parentElement;
//  li.parentNode.removeChild(li)
// })
// })

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf)
// var books = document.querySelectorAll('#book-list li .name')
// console.log(books)
// books.forEach(function(book){
// console.log(book)
// });
// books.forEach(function(book){
//     book.textContent += '(book title)'
// });

// const bookList = document.querySelector('#book-list')
// console.log(bookList.innerHTML)

// bookList.innerHTML = '<h2> Books and more Books.... </h2>'
// bookList.innerHTML += '<p> hello there friend </p>'

// const banner = document.querySelector('#page-banner')
// console.log('#page-banner node type is :', banner.nodeName)
// console.log('#page-banner node type is :', banner.nodeType)
// console.log('#page-banner node type is :', banner.hasChildNodes())

// const clonedBanner = banner.clonedNode(true)


//Traverse Upwards
const bookList = document.querySelector('#book-list')
// console.log('the parent node is:' ,bookList.parentNode.parentNode) // Pretty much the same as parent Element
// console.log('the parent node is:' ,bookList.parentElement.parentElement)
// //Traverse Downwards
// console.log('the child node is', bookList.childNodes)
// console.log(bookList.children)


// console.log('the next sibling is:', bookList.nextSibling)
// console.log('the next sibling is:', bookList.nextElementSibling)

console.log('the previous sibling is:', bookList.previousSibling)
console.log('the previous sibling is:', bookList.previousElementSibling)

bookList.previousElementSibling.querySelector('p').innerHTML += '<br> Charmander </br>'

console.log(bookList.nextElementSibling.parentNode.children)
console.log(bookList.previousElementSibling)
console.log(bookList.nextElementSibling)
})

