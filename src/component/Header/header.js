import { linkHeader, linkrrss } from '../HeaderLinks/links'
import { data } from '../data/data'
import { navLinks, rrss } from '../utils/navLinks'

import './header.css'
export const header = () => {
  const header = document.querySelector('#header')
  const imgLogo = document.createElement('img')
  imgLogo.classList.add('imgLogo')
  imgLogo.src = data.logo
  const buttonMode = document.createElement('button')
  buttonMode.classList.add('switch')
  buttonMode.classList.add('active')
  buttonMode.id = 'switch'
  const spanSun = document.createElement('span')
  const spanNight = document.createElement('span')

  const sunIcon = document.createElement('i')
  sunIcon.classList.add('fa-solid', 'fa-sun')
  spanSun.appendChild(sunIcon)

  const moonIcon = document.createElement('i')
  moonIcon.classList.add('fa-solid', 'fa-moon')
  spanNight.appendChild(moonIcon)
  buttonMode.appendChild(spanSun)
  buttonMode.appendChild(spanNight)
  buttonMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    buttonMode.classList.toggle('active')
  })
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
    const url = rrss[key]
    linkrrss(ulrrss, url)
  }

  header.appendChild(imgLogo)
  header.appendChild(buttonMode)
  nav.appendChild(ul)
  nav.appendChild(ulrrss)
  header.appendChild(nav)
  const homeli = document.querySelector('#navLink1')
  homeli.addEventListener('click', (e) => {
    e.preventDefault()
    const heroSection = document.querySelector('#hero')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error('Hero Section not found')
    }
  })
  const aboutli = document.querySelector('#navLink2')
  aboutli.addEventListener('click', (e) => {
    e.preventDefault()
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error('Section About me not found')
    }
  })
  const techli = document.querySelector('#navLink3')
  techli.addEventListener('click', (e) => {
    e.preventDefault()
    const techSection = document.querySelector('#my-techStack')
    if (techSection) {
      techSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error('Section Tech stack not found')
    }
  })
  const projectli = document.querySelector('#navLink4')
  projectli.addEventListener('click', (e) => {
    e.preventDefault()
    const projectSection = document.querySelector('#Projects')
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error('Project Section not found')
    }
  })
  const contactli = document.querySelector('#navLink5')
  contactli.addEventListener('click', (e) => {
    e.preventDefault()
    const contactSection = document.querySelector('#anyquestion')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error('Contact Section not found')
    }
  })
}
