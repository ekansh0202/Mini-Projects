const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const image = document.querySelector('.image');
const infinite = document.querySelector('.scroll-check');
const autoplay = document.querySelector('.autplay-check');
const autoplayInterval = document.querySelector('.autplay-interval');

const images = [
    'https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    'https://images.pexels.com/photos/691583/pexels-photo-691583.jpeg?cs=srgb&dl=pexels-ezz7-691583.jpg&fm=jpg',
    'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=',
    'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg'
]

let index = 0;
let range = 0;
let infiniteScroll = false;

document.addEventListener('DOMContentLoaded', () => {
    image.src = images[index];
});

leftButton.addEventListener('click', () => {
    if(index <= 0){
        if(infiniteScroll){
            index = images.length - 1;
        }
    }
    else{
        index--;
    }
    image.src = images[index];
});

rightButton.addEventListener('click', () => {
    if(index >= images.length - 1){
        if(infiniteScroll){
            index = 0;
        }
    }
    else{
        index++;
    }
    image.src = images[index];
});

infinite.addEventListener('click', () => {
    infiniteScroll = !infiniteScroll;
});

autoplayInterval.addEventListener('change', () => {
    range = autoplayInterval.value;
});

autoplay.addEventListener('click', () => {
    setInterval(() => {
        if(index >= images.length - 1){
            if(infiniteScroll){
                index = 0;
            }
        }
        else{
            index++;
        }
        image.src = images[index];
    }, range * 1000);
})