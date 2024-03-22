import { aboutMe } from '../aboutMe/aboutMe'
import { data } from '../data/data'
import { workExperience } from '../workExperience/workExperience'
import { education } from '../education/education'

import './about.css'
export const about = () => {
  const sectionAbout = document.querySelector('#about')
  const articleAboutme = document.createElement('article')
  articleAboutme.classList.add('articleAboutMe')
  const articleWorkExperience = document.createElement('article')
  articleWorkExperience.classList.add('articleWorkExperience')
  const articleEducation = document.createElement('article')
  articleEducation.classList.add('articleEducation')

  aboutMe(sectionAbout, articleAboutme)

  const workExperiences = data.workExperience
  const h2Work = document.createElement('h2')
  h2Work.textContent = 'Work Experience'
  articleWorkExperience.appendChild(h2Work)
  for (const job of workExperiences) {
    workExperience(sectionAbout, job, articleWorkExperience)
  }
  const h2Education = document.createElement('h2')
  h2Education.textContent = 'Education'
  articleEducation.appendChild(h2Education)
  const educationData = data.education
  for (const edu of educationData) {
    education(sectionAbout, edu, articleEducation)
  }
}
