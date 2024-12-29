'use strict'

function onInit() {
    render()
}

function onRemoveBook(idx) {
    removeBook(idx)
}

function onUpdateBook(idx) {
    updatePrice(idx)
}

function onAddBook() {
    var title = prompt('whats the title')
    var price = prompt('whats the price')
    console.log('hy')

    addBook(title, price)
    render()
}

function onReadBook(idx) {
    openModal()
    
    modalReveal(idx)

}

function openModal() {

    document.querySelector('dialog').style.opacity = '100'

}

function closeModal() {
    document.querySelector('dialog').style.opacity = '0'

}



function render() {
    var htmlStr = ''
    var books = getBooks()

    htmlStr = `<tbody>\n
            <tr class="header-tb">\n
                <th>Title</th>\n
                <th>Price</th>\n
                <th>Actions</th>\n
        </tbody>\n`

    for (var i = 0; i < books.length; i++) {
        htmlStr += `<tr>\n`
        htmlStr += `<td>${books[i].title}</td>\n`
        htmlStr += `<td>${books[i].price}</td>\n`
        htmlStr += `<td>\n
                     <button onclick="onReadBook(${i})" class="read-btn">Read</button>\n
                     <button onclick="onUpdateBook(${i})" class="update-btn">Update</button>\n 
                     <button onclick="onRemoveBook(${i})" class="delete-btn">Delete</button>\n 
                 </td>`
        htmlStr += `</tr>`
    }

    document.querySelector('table').innerHTML = htmlStr
}