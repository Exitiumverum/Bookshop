'use strict'

var gBooks = [
    {
        id: 'bg',
        title: 'The adventures of Lori Ipsi',
        price: 120,
        imgUrl: 'lori-ipsi.jpg'

    },
]

function getBooks(){
    return gBooks
}

function removeBook(idx){
    console.log('hy', idx)

    gBooks.splice(idx, 1)
    render()
}

function updatePrice(idx){
    gBooks[idx].price = prompt("whats the price?")
    // console.log('hy')
    render()
}

function addBook(title, price){
    gBooks.push({id: 0, 
        title,
        price,
        imgUrl: 'hy'
    })
}

function modalReveal(idx){
    var htmlStr = `<button onclick="closeModal()">X</button>\n`


    htmlStr += `<img src="${gBooks[idx].imgUrl}">\n`
    htmlStr += `the name of the movie: ${gBooks[idx].title}`

    document.querySelector('dialog').innerHTML = htmlStr
}