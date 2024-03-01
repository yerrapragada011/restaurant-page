function Home() {
  const content = document.getElementById('content')
  const title = document.createElement('h1')
  title.innerHTML = 'Home'
  content.appendChild(title)
}

export default Home
