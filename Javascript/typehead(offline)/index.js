let countries;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
        countries = data.map((item) => item?.name.common).sort()
    })

})

const input = document.querySelector(".input");
const list = document.querySelector(".list");
let currentIndex = -1;

input.addEventListener('input', (event) => {
    list.innerHTML = '';
    if(event.target.value){
        const result = countries.filter((i) => i.toLowerCase().includes(event.target.value.toLowerCase()))
        result.forEach((item) => {
            const element = document.createElement("p");
            element.textContent = item;
            element.classList.add('element');
            list.appendChild(element);
        })
    }
})

document.addEventListener('keydown', (event) => {
    const items = document.querySelectorAll(".element"); 

    if (items.length === 0) return;

    if (event.key === "ArrowDown") {
        currentIndex = (currentIndex + 1) % items.length; 
        updateHighlightedItem(items);
    } 
    else if (event.key === "ArrowUp") {
        currentIndex = (currentIndex - 1 + items.length) % items.length; 
        updateHighlightedItem(items);
    }
});

function updateHighlightedItem(items) {
    items.forEach((item) => item.classList.remove('highlighted'));

    const currentItem = items[currentIndex];
    currentItem.classList.add('highlighted');
    
    currentItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}