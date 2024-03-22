import './myTechStack.css'
import { data } from '../data/data'
import { techStackSkills } from '../techStackLinks.js/techStack'

export const techStack = () => {
  const techStackSection = document.querySelector('#my-techStack')
  const divInfo = document.createElement('divInfo')
  divInfo.classList.add('infoSkills')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  const articleSkills = document.createElement('article')
  articleSkills.classList.add('articleSkills')
  const ulSkills = document.createElement('ul')
  ulSkills.classList.add('ulSkills')

  const [titleTech, skillsTech] = data.skills
  h3.textContent = titleTech.title
  p.textContent = titleTech.description
  divInfo.appendChild(h3)
  divInfo.appendChild(p)
  techStackSection.appendChild(divInfo)
  for (const key in skillsTech) {
    const url = skillsTech[key]
    techStackSkills(url, ulSkills)
  }
  articleSkills.appendChild(ulSkills)
  techStackSection.appendChild(articleSkills)
}
