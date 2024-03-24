import './index.css'

export default function Home(DOM) {

    let a = 0

    DOM.innerHTML = (`
        <div>
            <div class='container'>
                <h1>JavaScript esbuild SPA</h1>
                <div class='items'>
                  <div class='logo'>
                    <img src='js.png' alt='js logo'>
                  </div>
                  <div class='logo'>
                    <img src='routes.png' alt='route logo'>
                  </div>
                  <div class='logo'>
                    <img src='esbuild.png' alt='esbuild logo'>
                  </div>
                </div>
                <p>Extremely Fast JS bundler</p>
                <button class='count' id='add'>Count: 0</button>
            </div>
        </div>
    `)
    
    
    const buttonEl = document.getElementById('add')
    
    buttonEl.addEventListener('click',()=>{
        a++
        buttonEl.textContent = `Count: ${a}`
    })

}