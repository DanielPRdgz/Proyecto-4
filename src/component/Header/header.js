import { linkHeader, linkrrss } from '../HeaderLinks/links'
import { evenListenerHeader } from '../ListenerNavHeader/evenListenerHeader'

import { buttonNight } from '../Nightmode/nightmode'

import { data } from '../data/data'
import { menuHam } from '../menuHam/menuHam'
import { navLinks, rrss } from '../utils/navLinks'

import './header.css'
export const header = () => {
  const header = document.querySelector('#header')
  const imgLogo = document.createElement('img')
  imgLogo.classList.add('imgLogo')
  imgLogo.src = data.logo
  buttonNight()
  menuHam()
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  ul.classList.add('ulLinks')
  const ulrrss = document.createElement('ul')
  ulrrss.classList.add('ulrrss')

  for (let i = 0; i < navLinks.length; i++) {
    const linkId = `navLink${i + 1}`
    linkHeader(ul, navLinks[i], linkId)
  }

  for (const key in rrss) {
    const { imageUrl, pageUrl } = rrss[key]
    linkrrss(ulrrss, key, imageUrl, pageUrl)
  }

  header.appendChild(imgLogo)
  header.appendChild(buttonNight())
  header.appendChild(menuHam())
  nav.appendChild(ul)
  nav.appendChild(ulrrss)
  header.appendChild(nav)
  evenListenerHeader()
}
