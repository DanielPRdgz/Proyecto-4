import { linkHeader } from '../HeaderLinks/links'
import { evenListenerHeaderMenuHam } from '../ListenerNavHeader/evenListenerHeader'
import { navLinks } from '../utils/navLinks'
import './menuHam.css'

export const createDivHam = () => {
  const quit = document.createElement('img')
  quit.src =
    'https://res.cloudinary.com/dj1axfhui/image/upload/v1710496353/marca-de-la-cruz_pzohdu.png'
  quit.classList.add('quitButton')
  quit.addEventListener('click', (e) => {
    const navMenuHam = document.querySelector('.navMenuHam')
    console.log(e)
    if (navMenuHam) {
      navMenuHam.classList.remove('active')
    }
  })
  const nav = document.createElement('nav')
  nav.classList.add('navMenuHam')
  const ul = document.createElement('ul')
  ul.classList.add('ulMenuHam')
  for (let i = 0; i < navLinks.length; i++) {
    const linkId = `navLink${i + 11}`
    linkHeader(ul, navLinks[i], linkId)
  }

  nav.appendChild(ul)
  nav.appendChild(quit)
  document.body.appendChild(nav)
  evenListenerHeaderMenuHam()
}
export const menuHam = () => {
  const buttonHam = document.createElement('img')
  buttonHam.id = 'buttonHam'
  buttonHam.src =
    'https://res.cloudinary.com/dj1axfhui/image/upload/v1706642019/menu_1_gi1vrb.png'
  buttonHam.addEventListener('click', () => {
    createDivHam()
    const navMenuHam = document.querySelector('.navMenuHam')
    navMenuHam.classList.toggle('active')
  })
  return buttonHam
}
