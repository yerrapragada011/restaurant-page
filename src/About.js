import Winnie from './winnie.jpeg'

function About() {
  const img = new Image()
  img.src = Winnie
  const content = document.getElementById('content')
  const title = document.createElement('h1')
  title.innerHTML = 'About'
  content.appendChild(title)
  content.append(img)
}

export default About
