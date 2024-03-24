import Navbar from './components/Navbar/Navbar.js';
import Router from './utils/router/router.js';
import { scriptElement } from './utils/sanitizer/domSanitizer.js';

export default function Start(DOM) {

  DOM.innerHTML =( `
    <div>
        <nav class='navbar' id='navbar'></nav>
        <div id='router' class='router'></div>
    </div>
  `)

  const navbar = document.getElementById('navbar')
  navbar.appendChild(scriptElement)
  Navbar(navbar)

  const routes = document.getElementById('router')
  routes.appendChild(scriptElement)
  Router(routes)
}