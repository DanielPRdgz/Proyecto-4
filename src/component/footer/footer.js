import { linkHeader, linkrrss } from '../HeaderLinks/links'
import { data } from '../data/data'
import { navLinks, rrss } from '../utils/navLinks'
import './footer.css'

export const footer = () => {
  const footer = document.querySelector('#footer')
  const imgLogo = document.createElement('img')
  imgLogo.classList.add('imgLogo')
  imgLogo.src = data.logo
  const divContainerLogoContact = document.createElement('div')
  divContainerLogoContact.classList.add('containerLogoContact')
  const divContactFooter = document.createElement('div')
  divContactFooter.classList.add('divContactFooter')
  const pTlf = document.createElement('p')
  const peMail = document.createElement('p')
  pTlf.textContent = data.tlf
  peMail.textContent = data.email
  const nav = document.createElement('nav')
  nav.classList.add('navFooter')
  const ul = document.createElement('ul')
  ul.classList.add('ulLinksFooter')
  const ulrrss = document.createElement('ul')
  ulrrss.classList.add('ulrrssFooter')

  divContactFooter.appendChild(pTlf)
  divContactFooter.appendChild(peMail)
  divContainerLogoContact.appendChild(imgLogo)
  divContainerLogoContact.appendChild(divContactFooter)

  for (const link of navLinks) {
    linkHeader(ul, link)
  }
  for (const key in rrss) {
    const url = rrss[key]
    linkrrss(ulrrss, url)
  }

  footer.appendChild(divContainerLogoContact)
  footer.appendChild(nav)
  nav.appendChild(ul)
  nav.appendChild(ulrrss)
}
