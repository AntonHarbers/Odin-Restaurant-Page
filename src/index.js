import LoadHome from './home.js';
import LoadAbout from './about.js';
import LoadMenu from './menu.js';
import './styles/style.css';
import { CreateButton, CreateNav, AppendChildrenToElement } from './helpers.js';

// Variable declarations
const content = document.getElementById('content');
const body = document.querySelector('body');

// Navbar rendering
const CreateNavBar = () => {
  const navbar = CreateNav();
  AppendChildrenToElement(navbar, [
    CreateButton('home-button', 'Home', OnHomeBtnClick),
    CreateButton('menu-button', 'Menu', OnMenuBtnClick),
    CreateButton('about-button', 'About', OnAboutBtnClick),
  ]);
  body.prepend(navbar);
};

// Helper functions
const ClearPage = () => {
  content.innerHTML = '';
};

const OnHomeBtnClick = () => {
  ClearPage();
  LoadHome();
};

const OnMenuBtnClick = () => {
  ClearPage();
  LoadMenu();
};

const OnAboutBtnClick = () => {
  ClearPage();
  LoadAbout();
};

// Initial page load
CreateNavBar();
LoadHome();

export { content };
