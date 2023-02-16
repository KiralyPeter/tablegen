
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
    });
}

generateTbody();