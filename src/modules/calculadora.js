const calc = require('./fields')
import { deletingDigit } from './cleaningUp'
deletingDigit()
import { cleaningScreen } from './cleaningUp'
cleaningScreen()
export function calculator() {

    calc.equal.addEventListener('click', (e) => {


        if (calc.display.innerText == '') {

            e.preventDefault()
            const empty = 'empty'
            calc.display.innerText = empty
            setTimeout(() => { calc.display.innerText = '' }, 5000)
            return

        } else {

            calc.display.innerText = eval(calc.display.innerText)
        }


    })
}
calc.equal.addEventListener('click', calculator)