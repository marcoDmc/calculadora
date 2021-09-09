const calc = require('./fields')
import { operators } from './operators';
operators()



export function darkMode() {

    let isDark = true;

    calc.themeToggleBtn.onclick = () => {

        calc.calculator.classList.toggle("dark");
        calc.themeToggleBtn.classList.toggle("active");
        calc.moon.classList.toggle('moonOf')
        calc.sun.classList.toggle('sun')
        calc.moon.classList.toggle('moon')
        calc.sun.classList.toggle('sunOf')

        isDark = !isDark;



    };

}

darkMode()