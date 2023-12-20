import { content } from './index.js';
import Burger from './images/burger.jpg';
import Hotdog from './images/hotdog.jpg';
import Tofu from './images/tofu.jpg';
import Steak from './images/steak.jpg';
import Stroganoff from './images/stroganoff.jpg';
import PulledBurger from './images/pulledburger.jpg';
import Sushi from './images/sushi.jpg';
import Burrito from './images/burrito.jpg';
import { CreateDiv, CreateImage, AppendChildrenToElement } from './helpers.js';

export default function LoadMenu() {
  const menu = CreateDiv('menu');

  AppendChildrenToElement(menu, menuItems);
  AppendChildrenToElement(content, [
    CreateDiv('headline', 'Our Menu'),
    menu,
    CreateDiv('footer', '© 2023 Vegan Tasties'),
  ]);
}

const MenuItem = (name, description, price, image) => {
  const menuItem = CreateDiv('menu-item');

  AppendChildrenToElement(menuItem, [
    CreateDiv('menu-item-text', name),
    CreateImage('menu-item-image', image),
    CreateDiv('menu-item-description', description),
    CreateDiv('menu-item-price', price),
  ]);

  return menuItem;
};

const menuItems = [
  MenuItem(
    'Vegan Burger',
    'A delicious vegan burger, served with fries',
    '$10',
    Burger
  ),
  MenuItem(
    'Vegan Hotdog',
    'A delicious vegan hotdog, served with fries',
    '$8',
    Hotdog
  ),
  MenuItem(
    'Scrambled Tofu',
    'Scrambled Tofu with tomatoes, spinach, onions and mushrooms. Served with a toasted bun.',
    '$15',
    Tofu
  ),
  MenuItem(
    'Mash, Beans, Tofu Steak',
    'Mash and Beans served with a supreme tofu steak',
    '$15',
    Steak
  ),
  MenuItem(
    'Mushroom Stroganoff',
    'A delicious mushroom stroganoff served over al dente pasta',
    '$12',
    Stroganoff
  ),
  MenuItem(
    'Pulled Shroom Burger',
    'A delicious pulled mushroom burger, served with fries',
    '$8',
    PulledBurger
  ),
  MenuItem(
    'Vegan Sushi',
    '10 piece vegan sushi plate. Enjoy with wasabi and soy sauce!',
    '$20',
    Sushi
  ),
  MenuItem(
    'Vegan Burrito',
    'A delicious vegan buritto. (Rice, beans, corn, pulled tofu, guac and sauce)',
    '$15',
    Burrito
  ),
];
