import './myProjects.css'
import { projectCards } from '../MyprojectsLink.js/projectsCards'
import { data } from '../data/data'
export const projects = () => {
  const sectionProjects = document.querySelector('#Projects')
  const divInfo = document.createElement('div')
  divInfo.classList.add('divInfoProject')
  const divArticleCards = document.createElement('div')
  divArticleCards.classList.add('articlesContainer')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')
  const [generalInfo, ...projectList] = data.projects
  h3.textContent = generalInfo.title
  p.textContent = generalInfo.description

  for (const project of projectList) {
    projectCards(project, divArticleCards)
  }
  divInfo.appendChild(h3)
  divInfo.appendChild(p)

  sectionProjects.appendChild(divInfo)
  sectionProjects.appendChild(divArticleCards)
}
