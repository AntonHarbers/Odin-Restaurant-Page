import LoadHome from "./home.js";
import LoadAbout from "./about.js";
import LoadMenu from "./menu.js";
import './style.css';

const content = document.getElementById('content');

const ClearPage = () => {
    content.innerHTML = "";
}

const CreateNavBar = () => {
    const navbar = document.createElement('nav');

    content.appendChild(navbar);

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
    CreateNavBar();
    LoadHome();
}
const OnMenuBtnClick = () => {
    ClearPage();
    CreateNavBar();
    LoadMenu();
}
const OnAboutBtnClick = () => {
    ClearPage();
    CreateNavBar();
    LoadAbout();
}

CreateNavBar();
LoadHome();


export {content};