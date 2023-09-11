import {content} from './index.js';

export default function LoadMenu(){

    const headline = document.createElement('div');
    headline.textContent = 'Our Menu!';
    headline.classList.add('headline');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    const menyItem1 = document.createElement('div');
    const menuItem1Text = document.createElement('div');
    menuItem1Text.textContent = 'Vegan Burger';
    menyItem1.classList.add('menu-item');
    const menyItem2 = document.createElement('div');
    const menyItem2Text = document.createElement('div');  

    menyItem2Text.textContent = 'Vegan Pizza';
    menyItem2.classList.add('menu-item');

    content.appendChild(headline);
    content.appendChild(menu);
    menu.appendChild(menyItem1);
    menyItem1.appendChild(menuItem1Text);
    menyItem2.appendChild(menyItem2Text);
    menu.appendChild(menyItem2);
    
}