function calculadora() {
    //retornando valor numerico dos buttons
    const display = document.querySelector('#display')

    function retornaNum() {
        const btn = document.querySelectorAll('.btn-number')

        btn.forEach((btns) =>
            btns.addEventListener('click', (event) => {
                display.innerHTML += event.currentTarget.textContent;
            })
        );
    }
    retornaNum()

    //limpando display

    function displayClear() {
        const clear = document.querySelector('#clear')
        clear.addEventListener('click', (e) => {
            display.innerText = ''
            setTimeout(() => {
                display.innerText = ''
            }, 100);
        })
    }
    displayClear()

    //deletando

    function deletandoValueDisplay() {
        const delet = document.querySelector('#backspace')
        delet.addEventListener("click", () => {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        })

    }

    deletandoValueDisplay()

    //checando se o display esta vazio e fazendo a conta se for false
    function validaDisplay() {
        const equal = document.querySelector('#equal')
        equal.addEventListener('click', () => {

            if (display.innerText == '') {
                display.innerText = 'empty'
                setTimeout(() => {
                    display.innerText = ''
                }, 2000)
            } else if (display.innerText != '') {

                display.innerText = eval(display.innerText)
            }


        })
    }
    validaDisplay()


    //operadores
    function operadores() {
        const operator = document.querySelectorAll('.btn-operator')

        operator.forEach((evento) => {
            evento.addEventListener('click', (e) => {
                if (evento.id == 'backspace' || evento.id == 'equal') {
                    evento.preventDefault();
                } else {
                    display.innerText += evento.id
                }

            })
        })
    }

    operadores()
    //dark & white
    function dark() {
        const themeToggleBtn = document.querySelector(".theme-toggler");
        const calculator = document.querySelector(".calculator");
        const toggleIcon = document.querySelector(".toggler-icon");
        let isDark = true;
        themeToggleBtn.onclick = () => {
            calculator.classList.toggle("dark");
            themeToggleBtn.classList.toggle("active");
            isDark = !isDark;
            if (isDark == true) {
                toggleIcon.classList.replace("fa-moon", "fa-sun");
            } else {
                toggleIcon.classList.replace("fa-sun", "fa-moon");
            }
        };

    }

    dark()




}

calculadora()
