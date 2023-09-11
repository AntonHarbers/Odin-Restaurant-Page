import LoadHome from "./home.js";
import LoadAbout from "./about.js";
import LoadMenu from "./menu.js";
import './style.css';

const content = document.getElementById('content');
const body = document.querySelector('body');

const ClearPage = () => {
    content.innerHTML = "";
}

const CreateNavBar = () => {
    const navbar = document.createElement('nav');

    body.prepend(navbar);

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', () => OnHomeBtnClick());

    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.addEventListener('click', () => OnMenuBtnClick());

    const aboutButton = document.createElement('button');
    aboutButton.textContent = "About";
    aboutButton.addEventListener('click', () => OnAboutBtnClick());

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(aboutButton);
}

const OnHomeBtnClick = () => {
    ClearPage();
    LoadHome();
}
const OnMenuBtnClick = () => {
    ClearPage();
    LoadMenu();
}
const OnAboutBtnClick = () => {
    ClearPage();
    LoadAbout();
}

CreateNavBar();

LoadHome();


export {content};