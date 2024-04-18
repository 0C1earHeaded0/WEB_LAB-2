class Goods {
    constructor(name, price, count) {
        this.id = Goods.countOfGoods++;
        this.name = name;
        this.price = price;
        this.count = count;
    }

    static countOfGoods = Number(0);
}

var goodList = [
    new Goods('Молоко', 104.4, 15),
    new Goods('Сыр', 400, 12),
    new Goods('Яйца', 187, 30),
    new Goods('Вода', 57.5, 43),
    new Goods('Йогурт', 150, 76),
    new Goods('Творог', 115.7, 23)
]

resetTable();

let currentSort = "";

const searchFild = document.getElementById('searchFild');

function sortByName() {
    removeAllArrows();
    let thName = document.getElementsByTagName('th')[1];
    if (currentSort == "name+") {
        thName.classList.remove('down');
        thName.classList.add('up');
        currentSort = "name-";
        goodList = goodList.sort((a,b) => compareString(b.name, a.name));
        resetTable();
        return;
    }
    thName.classList.remove('up');
    thName.classList.add('down');
    currentSort = "name+";
    goodList = goodList.sort((a,b) => compareString(a.name, b.name));
    resetTable();
}

function sortByPrice() {
    removeAllArrows();
    let thPrice = document.getElementsByTagName('th')[2];
    if (currentSort == "price+") {
        thPrice.classList.remove('down');
        thPrice.classList.add('up');
        currentSort = "price-";
        goodList = goodList.sort((a,b) => b.price - a.price);
        resetTable();
        return;
    }
    thPrice.classList.remove('up');
    thPrice.classList.add('down');
    currentSort = "price+";
    goodList = goodList.sort((a,b) => a.price - b.price);
    resetTable();
}

function sortByCount() {
    removeAllArrows();
    let thCount = document.getElementsByTagName('th')[3];
    if (currentSort == "count+") {
        thCount.classList.remove('down');
        thCount.classList.add('up');
        currentSort = "count-";
        goodList = goodList.sort((a,b) => b.count - a.count);
        resetTable();
        return;
    }
    thCount.classList.remove('up');
    thCount.classList.add('down');
    currentSort = "count+";
    goodList = goodList.sort((a,b) => a.count - b.count);
    resetTable();
}

function sortById() {
    removeAllArrows();
    let thId = document.getElementsByTagName('th')[0];
    if (currentSort == "id+") {
        thId.classList.remove('down');
        thId.classList.add('up');
        currentSort = "id-";
        goodList = goodList.sort((a,b) => b.id - a.id);
        resetTable();
        return;
    }
    thId.classList.remove('up');
    thId.classList.add('down');
    currentSort = "id+";
    goodList = goodList.sort((a,b) => a.id - b.id);
    resetTable();
}

function resetTable() {
    table.innerHTML = document.getElementsByTagName('tr')[0].innerHTML;
    for (let i = 0; i < goodList.length; i++)
        table.innerHTML += `<tr><td>${goodList[i].id}</td><td>${goodList[i].name}</td><td>${goodList[i].price}</td><td>${goodList[i].count}</td></tr>`;
}

function removeAllArrows() {
    let ths = document.getElementsByTagName('th');
    for (let i = 0; i < ths.length; i++) {
        ths[i].classList.remove('down');
        ths[i].classList.remove('up');
    }
}

function compareString(a, b) {
    for (let i = 0; i < Math.max(a.length, b.length); i++){
        if (a[i] < b[i]) {
            return -1;
        }

        if (a[i] > b[i]) {
            return 1;
        }
    }

    return 0;
}

document.getElementById("searchField").addEventListener("input", function() {
    let filterValue = this.value.toLowerCase();
    let table = document.getElementById("table");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        rows[i].style.display = "";
        if (!rows[i].innerHTML.toLowerCase().includes(filterValue)){
            rows[i].style.display = "none";
        }
    }
});