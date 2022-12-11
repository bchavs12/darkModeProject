const button = document.querySelector('span')
const body = document.querySelector('body')
const header = document.querySelector('h1')
let listItems = document.querySelectorAll('.item')

button.onclick = (event) => {
  body.classList.toggle('dark-body')
  header.classList.toggle('darktitulo')

  for (let items of listItems) {
    items.classList.toggle('dark')
  }
}
