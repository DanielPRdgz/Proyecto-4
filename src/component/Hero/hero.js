import './hero.css'
import { data } from '../data/data'
export const hero = () => {
  const heroSection = document.querySelector('#hero')
  const divInfo = document.createElement('div')
  divInfo.classList.add('divInfo')
  const title = document.createElement('h1')
  const divImg = document.createElement('div')
  divImg.classList.add('divImg')
  const img = document.createElement('img')
  img.src = data.logoHero
  title.textContent = data.hero
  divInfo.appendChild(title)
  divImg.appendChild(img)

  heroSection.appendChild(divInfo)
  heroSection.appendChild(divImg)
}
