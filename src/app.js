// const { Button } = require("bootstrap"); Ezt a VSCode rakta ide...

// adatok bekötése index.html-ből:

const tbody = document.querySelector("#tbody");
const saveButton = document.querySelector("#saveButton")

const nameInput = document.querySelector("#name");
const quantityInput = document.querySelector("#quantity");
const priveInput = document.querySelector("#price");

const editIdInput = document.querySelector("#editId");
const editIdName = document.querySelector("#editName");
const editIdQuantity = document.querySelector("#editQuantity");
const editIdPrice = document.querySelector("#editPrice");

const saveEditButton = document.querySelector("#saveEditButton");

const gyumolcsok = [
    { id: 1, name: 'szilva', quantity: 35, price: 8 },
    { id: 2, name: 'alma', quantity: 45, price: 8.3 },
    { id: 3, name: 'körte', quantity: 25, price: 9.5 },
    { id: 4, name: 'barack', quantity: 37, price: 12 }
];



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
        tr.append(generateTdDeleteButton(gyumolcs.id));
        tr.append(generateTdEditButton(gyumolcs));


    });
}

generateTbody();

function generateTdDeleteButton(id) {
    let td = document.createElement("td");
    let button = document.createElement("button");
    button.textContent = "Törlés";
    button.classList = "btn btn-warning";
    button.addEventListener("click", () => {
        console.log(id);
        let index = 0;
        let count = 0;
        gyumolcsok.forEach( (gy) => {
            if (gy.id == id) {
                index = count;
            }
            count++;
                
        });
        console.log(index);
        gyumolcsok.splice(index, 1);
        tbody.textContent = "";
        generateTbody();

    });
    td.append(button);
    return td;
}

function generateTdEditButton(fruit) {
    let td = document.createElement("td");
    let button = document.createElement("button");
    button.textContent = "Szerkesztés";
    button.classList = "btn btn-primary";

    // hogy feldobja a Módosítás ablakot...
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#editModal");

    button.addEventListener("click", () => {
        // console.log("Működik");
        // console.log(fruit.name);
        
        // a megjelenített mezők megkapják az adott gyümölcs adott tulajdonságát (beírja az adatokat..)
        editIdInput.value = fruit.id;
        editIdName.value = fruit.name;
        editIdQuantity.value = fruit.quantity;
        editIdPrice.value = fruit.price;
    

    });

    td.append(button);
    return td;
}

saveButton.addEventListener("click", () => {
    // console.log("Működik");
    let name = nameInput.value;
    let quantity = quantityInput.value;
    let price = priveInput.value;

    let gyumolcs = {
        name: name, 
        quantity: quantity, 
        price: price
    };

    gyumolcsok.push(gyumolcs); // ezmiez? - listához hozzáadás..
    console.log(gyumolcsok);

    tbody.textContent = ""; // üresre töröljük..
    generateTbody(); // újrta futtatjuk a tábla generálást
    clearFieldOnAddModal();
})

saveEditButton.addEventListener("click", () => {
    // console.log("saveEditButton Működik");

    let id = editIdInput.value;
    let name = editIdName.value;
    let quantity = editIdQuantity.value;
    let price = editIdPrice.value;

    // console.log("név: ", name);

    gyumolcsok.forEach( (gyumolcs) => {
        // console.log(gyumolcs.nev);
        // ha egyelő az ID, akkor azt meg kell változtatni...
        if (gyumolcs.id == id) {
            gyumolcs.name = name;
            gyumolcs.quantity = quantity;
            gyumolcs.price = price;
        }
    } );
    tbody.textContent = ""; // üresre töröljük..
    generateTbody(); // újrta futtatjuk a tábla generálást

});


function clearFieldOnAddModal(){
    nameInput.value = "";
    quantityInput.value = "";
    priveInput.value = "";
}