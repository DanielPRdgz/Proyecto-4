import './education.css'
export const education = (section, education, article) => {
  const divEducation = document.createElement('div')
  divEducation.classList.add('divEducationContainer')
  const divFirstColumn = document.createElement('div')
  divFirstColumn.classList.add('divFirstColumnEducation')
  const divSecondColumn = document.createElement('div')
  divSecondColumn.classList.add('divSecondColumnEducation')
  const h4degree = document.createElement('h4')
  const pWhere = document.createElement('p')
  const pGradYear = document.createElement('p')

  h4degree.textContent = education.degree
  pWhere.textContent = education.where
  pGradYear.textContent = education.graduationYear

  divFirstColumn.appendChild(h4degree)
  divFirstColumn.appendChild(pWhere)
  divSecondColumn.appendChild(pGradYear)
  divEducation.appendChild(divFirstColumn)
  divEducation.appendChild(divSecondColumn)
  article.appendChild(divEducation)
  section.appendChild(article)
}
