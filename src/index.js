import Pic from './cafe.jpg'

function pageLoad() {
  const content = document.getElementById('content')
  const img = new Image()
  img.src = Pic
  content.appendChild(img)
  const title = document.createElement('h1')
  title.innerHTML = 'Hello world'
  content.appendChild(title)
  const description = document.createElement('p')
  description.innerHTML = 'Great restaurant'
  content.appendChild(description)
}

pageLoad()
