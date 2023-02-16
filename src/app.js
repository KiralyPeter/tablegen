// const { Button } = require("bootstrap");

const gyumolcsok = [
    { name: 'szilva', quantity: 35, price: 8 },
    { name: 'alma', quantity: 45, price: 8.3 },
    { name: 'körte', quantity: 25, price: 9.5 },
    { name: 'barack', quantity: 37, price: 12 }
];

const tbody = document.querySelector("#tbody");

// oldal betöltődésre induljon a generálás...

function generateTbody(){
    gyumolcsok.forEach( (gyumolcs) => {
        console.log(gyumolcs);

        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdQuantity = document.createElement("td");
        let tdPrice = document.createElement("td");

        tdName.textContent = gyumolcs.name;
        tdQuantity.textContent = gyumolcs.quantity;
        tdPrice.textContent = gyumolcs.price;

        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdQuantity);
        tr.append(tdPrice);
        tr.append(generateTdDeleteButton());


    });
}

generateTbody();

function generateTdDeleteButton() {
    let td = document.createElement("td");
    let button = document.createElement("button");
    button.textContent = "Törlés";
    button.classList = "btn btn-warning";
    td.append(button);
    return td;
}