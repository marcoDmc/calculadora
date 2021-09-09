const calc = require('./fields')

export function digitsScreen() {

    calc.btn.forEach((btns) =>
        btns.addEventListener('click', (event) => {
            calc.display.innerHTML += event.target.id
        })
    );
 
}


