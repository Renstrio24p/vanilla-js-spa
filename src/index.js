import './index.css'
import Start from "./Start"
import 'animate.css'
import { scriptElement } from './utils/sanitizer/domSanitizer'

const DOM = document.getElementById('app')
DOM.appendChild(scriptElement)
{DOM && Start(DOM)}