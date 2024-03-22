import './aboutMe.css'
import { data } from '../data/data'

export const aboutMe = (section, articleAboutme) => {
  const h2 = document.createElement('h2')
  const p = document.createElement('p')

  h2.textContent = 'About Me'
  p.textContent = data.aboutMe
  articleAboutme.appendChild(h2)
  articleAboutme.appendChild(p)
  section.appendChild(articleAboutme)
}
