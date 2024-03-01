import Home from './home'
import About from './about'
import Contact from './contact'

function pageLoad() {
  const content = document.getElementById('content')
  let home = document.getElementById('home')
  home.addEventListener('click', () => {
    content.innerHTML = ''
    Home()
  })
  let about = document.getElementById('about')
  about.addEventListener('click', () => {
    content.innerHTML = ''
    About()
  })
  let contact = document.getElementById('contact')
  contact.addEventListener('click', () => {
    content.innerHTML = ''
    Contact()
  })
}

pageLoad()
