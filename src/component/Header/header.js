import { linkHeader, linkrrss } from '../HeaderLinks/links'
import { data } from '../data/data'
import { navLinks, rrss } from '../utils/navLinks'

import './header.css'
export const header = () => {
  const header = document.querySelector('#header')
  const imgLogo = document.createElement('img')
  imgLogo.classList.add('imgLogo')
  imgLogo.src = data.logo
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  ul.classList.add('ulLinks')
  const ulrrss = document.createElement('ul')
  ulrrss.classList.add('ulrrss')
  for (const link of navLinks) {
    linkHeader(ul, link)
  }
  for (const key in rrss) {
    const url = rrss[key]
    linkrrss(ulrrss, url)
  }
  header.appendChild(imgLogo)
  nav.appendChild(ul)
  nav.appendChild(ulrrss)
  header.appendChild(nav)
}
