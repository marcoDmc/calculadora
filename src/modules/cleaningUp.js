const calc = require('./fields')
import { digitsScreen } from './digitsScreen';
digitsScreen()


export function cleaningScreen() {

    calc.clear.addEventListener('click', (e) => {
        calc.display.innerText = ''
        setTimeout(() => {
            calc.display.innerText = ''
        }, 100);
    })
}


export function deletingDigit() {

    calc.delet.addEventListener("click", () => {
        let string = calc.display.innerText.toString();
        calc.display.innerText = string.substr(0, string.length - 1);
    })

}

