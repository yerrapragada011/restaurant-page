import Winnie from './winnie.jpeg'

function Contact() {
  const img = new Image()
  img.src = Winnie
  const content = document.getElementById('content')
  const title = document.createElement('h1')
  title.innerHTML = 'Contact'
  content.appendChild(title)
  content.append(img)
}

export default Contact
