let calcScreen = document.querySelector('.screen')
let calcBtns = document.querySelectorAll('.btn')
let clearBtn = document.querySelector('.clear_btn')

calcBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        action(this.textContent)
    })
})
clearBtn.addEventListener('click', function() {
    calcScreen.textContent = ''
})

function action(value) {
    if (value == '=') {
        let res = eval(String(calcScreen.textContent))
        calcScreen.textContent = eval(String(calcScreen.textContent))

    } else if (value == '+' || value == '-' || value == '*' || value == '/') {
        calcScreen.textContent += ` ${value} `
    } else {
        calcScreen.textContent += value
    }
}

module.exports = {
    action
}