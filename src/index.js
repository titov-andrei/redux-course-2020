import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('btn')

let state = 0

function render() {
  counter.textContent = state.toString()
}

addBtn.addEventListener('click', () => { 
  state++
  render()
})

subBtn.addEventListener('click', () => { 
  state--
  render()
})

render()
