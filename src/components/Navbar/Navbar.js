import './index.css'

export default function Navbar(DOM) {
    
      DOM.innerHTML = (`
        <nav class='navbar'>
          <ul>
             <li><a href='/'>Home</a></li>
             <li><a href='/sample'>Sample</a></li>
          </ul>
        </nav>
      `)
    
}