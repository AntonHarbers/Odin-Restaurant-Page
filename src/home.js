import Resto1 from './images/resto1.jpg';
import { content } from './index.js';
import { CreateDiv, CreateImage, AppendChildrenToElement } from './helpers.js';

export default function LoadHome() {
  AppendChildrenToElement(content, [
    CreateDiv('headline', 'Vegan Tasties'),
    CreateImage('Image', Resto1),
    CreateDiv(
      'copy',
      'Welcome to the worlds finest vegan restaurant. We hope you enjoy veggies, tofu and grains as much as we do!'
    ),
    CreateDiv('footer', '© 2023 Vegan Tasties'),
  ]);
}
