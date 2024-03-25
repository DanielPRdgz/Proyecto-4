import './anyquestion.css'
import { data } from '../data/data'
export const anyquestion = () => {
  const anysection = document.querySelector('#anyquestion')
  const divAny = document.createElement('div')
  divAny.classList.add('divAny')
  const h2 = document.createElement('h2')
  const pFeel = document.createElement('p')
  const h3email = document.createElement('h3')
  const h3tlf = document.createElement('h3')

  h2.textContent = 'Contact me'
  pFeel.textContent =
    'Feel free to contact me any time. I will get back to you as soon as i can'
  h3email.textContent = `${data.email}`
  h3tlf.textContent = `${data.tlf}`
  divAny.appendChild(h2)
  divAny.appendChild(pFeel)
  divAny.appendChild(h3email)
  divAny.appendChild(h3tlf)
  anysection.appendChild(divAny)
}
