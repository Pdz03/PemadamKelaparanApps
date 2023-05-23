import 'regenerator-runtime';
import '../styles/base.scss';
import './views/component/nav-bar';
import './views/component/app-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
  event.preventDefault();
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
