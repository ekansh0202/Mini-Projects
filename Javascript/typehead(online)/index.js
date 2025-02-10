let usernames;

const input = document.querySelector(".input");
const list = document.querySelector(".list");
let currentIndex = -1;
let timeout;

input.addEventListener("input", async (event) => {
  list.innerHTML = "";
  const data = await getUsernames(event.target.value);
  data?.items.forEach((item) => {
    const element = document.createElement('p');
    element.textContent = item.login;
    element.classList.add("element");
    list.appendChild(element);
  })
  input.disabled = false;
});

const getUsernames = (username) => {
    return new Promise((resolve, reject) => {
        let result;
        if (username) {
          if (timeout) {
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
            input.disabled = true;
            result = fetch(
              `https://api.github.com/search/users?per_page=5&q=${username}`,
              {
                method: "GET",
              }
            )
              .then((response) => response.json())
              .then((data) => resolve(data))
              .catch((err) => reject(err))
          }, 2000);
        }
    })
};

document.addEventListener('keydown', (event) => {
    const items = document.querySelectorAll(".element");

    if(items.length === 0) return;

    if(event.key === "ArrowDown"){
        currentIndex = (currentIndex + 1) % items.length;
        updateHighlightedItem(items);
    }
    else if(event.key === "ArrowUp"){
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateHighlightedItem(items);
    }
})


function updateHighlightedItem(items) {
    items.forEach((item) => item.classList.remove('highlighted'));

    const currentItem = items[currentIndex];
    currentItem.classList.add('highlighted');

    currentItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
