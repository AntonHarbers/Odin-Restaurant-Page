import {content} from './index.js';

import Burger from './images/burger.jpg';
import Hotdog from './images/hotdog.jpg';
import Tofu from './images/tofu.jpg';
import Steak from './images/steak.jpg';
import Stroganoff from './images/stroganoff.jpg';
import PulledBurger from './images/pulledburger.jpg';
import Sushi from './images/sushi.jpg';
import Burrito from './images/burrito.jpg';

const MenuItem = (name, description, price, image) => {
    const menuItem = document.createElement('div');
    const menuItemText = document.createElement('div');
    menuItemText.textContent = name;
    menuItem.classList.add('menu-item');
    menuItemText.classList.add('menu-item-text');
    menuItem.appendChild(menuItemText);

    const menuItemImage = new Image();
    menuItemImage.src = image;
    menuItemImage.classList.add('menu-item-image');
    menuItem.appendChild(menuItemImage);

    const menuItemDescription = document.createElement('div');
    menuItemDescription.textContent = description;
    menuItemDescription.classList.add('menu-item-description');
    menuItem.appendChild(menuItemDescription);

    const menuItemPrice = document.createElement('div');
    menuItemPrice.textContent = price;
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemPrice);

    return menuItem;
}

const menuItems = [
    MenuItem('Vegan Burger', 'A delicious vegan burger, served with fries', '$10', Burger),
    MenuItem('Vegan Hotdog', 'A delicious vegan hotdog, served with fries', '$8', Hotdog ),
    MenuItem('Scrambled Tofu', 'Scrambled Tofu with tomatoes, spinach, onions and mushrooms. Served with a toasted bun.', '$15', Tofu),
    MenuItem('Mash, Beans, Tofu Steak', 'Mash and Beans served with a supreme tofu steak', '$15', Steak),
    MenuItem('Mushroom Stroganoff', 'A delicious mushroom stroganoff served over al dente pasta', '$12', Stroganoff ),
    MenuItem('Pulled Shroom Burger', 'A delicious pulled mushroom burger, served with fries', '$8', PulledBurger ),
    MenuItem('Vegan Sushi', '10 piece vegan sushi plate. Enjoy with wasabi and soy sauce!', '$20', Sushi ),
    MenuItem('Vegan Burrito', 'A delicious vegan buritto. (Rice, beans, corn, pulled tofu, guac and sauce)', '$15', Burrito),
]


export default function LoadMenu(){
    const headline = document.createElement('div');
    headline.textContent = 'Our Menu';
    headline.classList.add('headline');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    content.appendChild(headline);
    content.appendChild(menu);

    menuItems.forEach(item => {
        menu.appendChild(item);
    });

    const copy = document.createElement('div');
    copy.textContent = '© 2023 Vegan Tasties';
    copy.classList.add('footer');

    content.appendChild(copy);


}
