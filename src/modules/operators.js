const calc = require('./fields')
import { calculator } from './calculadora';
calculator()
export function operators() {
  

    calc.operators.forEach((evento) => {
        evento.addEventListener('click', (e) => {
            if (evento.id == 'backspace' || evento.id == 'equal') {
                e.preventDefault();
            } else {
                calc.display.innerText += evento.id
            }

        })
    })
}
