
"use strict"
const init = () => {
    renderGoodsList(goods)
}
const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Dress' },
]


//   const renderGoodsItem = (title, price) => {
//     return `<div class="goods-item">
//     <h3>${title}</h3>
//     <p>${"Цена: "+ price }</p>
//     <button class="buy-btn">Купить</button></div>`

//   }

//   const renderGoodsList = list => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price))

//       const goodsListDiv = document.querySelector('.goods-list')
//       goodsListDiv.innerHTML = goodsList

//     document.querySelector('.goods-list').innerHTML = goodsList

//   }

//   const init = () => {
//     renderGoodsList(goods)
//   }
const renderGoodsItem = ({ price = "not available ", title }) => {
    return `<div class="goods-item">
    <h3 class = "name">${title}</h3>
    <p class = "price">${"Цена: " + price}</p>
    <button class="buy-btn">Купить</button></div>`

}

const renderGoodsList = list => {
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item)).join("");
}

window.onload = init
