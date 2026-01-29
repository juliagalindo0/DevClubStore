const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')

let active = 0
const total = items.length
let timer

function update(direction) {
    // remove ativo atual
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    // controla índice
    if (direction > 0) {
        active++
        if (active === total) active = 0
    } else if (direction < 0) {
        active--
        if (active < 0) active = total - 1
    }

    // adiciona novo ativo
    items[active].classList.add('active')
    dots[active].classList.add('active')

    // atualiza número
    numberIndicator.textContent = String(active + 1).padStart(2, '0')

    resetTimer()
}

function resetTimer() {
    clearInterval(timer)
    timer = setInterval(() => {
        update(1)
    }, 5000)
}

// autoplay inicial
resetTimer()

prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})
