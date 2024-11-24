import './index.css';
import imageCat from './assets/cat.jpg'

console.log('Hello World!');


const title = document.createElement('h1');
title.textContent = 'I love JavaScript';

const image = document.createElement('img');
image.src = imageCat;

document.body.append(title);
document.body.append(image);
