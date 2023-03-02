// const { Button } = require("bootstrap"); Ezt a VSCode rakta ide...

// adatok bekötése index.html-ből:

const tbody = document.querySelector("#tbody");
const saveButton = document.querySelector("#saveButton")

const nameInput = document.querySelector("#name");
const quantityInput = document.querySelector("#quantity");
const priveInput = document.querySelector("#price");

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

function clearFieldOnAddModal(){
    nameInput.value = "";
    quantityInput.value = "";
    priveInput.value = "";
}