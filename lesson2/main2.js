

class GoodsItem {
    constructor(title, price = 0) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
             <h2 class = "name">${this.title}</h2>
             <p class = "price">${"Цена: " + this.price}</p>
             <button class="buy-btn">Купить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];

    }

    

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();

        });
        console.log(listHtml)
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    costCalculation() {
        let cost = this.goods.reduce((sum, listItem) => sum + listItem.price, 0);
        console.log(cost);
    }

}

window.onload = function () {
    const list = new GoodsList();
    list.fetchGoods();
    list.render();
    list.costCalculation();
}
