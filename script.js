const left = document.querySelector('.left')
const Right = document.querySelector('.Right')
const container = document.querySelector('.container')


left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

Right.addEventListener('mouseenter', () => container.classList.add('hover-Right'))
Right.addEventListener('mouseleave', () => container.classList.remove('hover-Right'))



