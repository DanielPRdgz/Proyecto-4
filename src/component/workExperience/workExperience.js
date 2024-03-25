import './workExperience.css'
export const workExperience = (section, job, article) => {
  const divJob = document.createElement('div')
  divJob.classList.add('divJobContainer')
  const divFirstColumn = document.createElement('div')
  divFirstColumn.classList.add('divFirstColumn')
  const divSecondColumn = document.createElement('div')
  divSecondColumn.classList.add('divSecondColumn')
  const h4Position = document.createElement('h4')
  const pCompany = document.createElement('p')
  const pDes = document.createElement('p')
  const pPeriod = document.createElement('p')
  const pLocation = document.createElement('p')
  const pStatus = document.createElement('p')
  pStatus.classList.add('pStatus')
  h4Position.textContent = job.position
  pCompany.textContent = job.company
  pLocation.textContent = job.location
  pDes.textContent = job.description

  divFirstColumn.appendChild(h4Position)
  divFirstColumn.appendChild(pCompany)
  divFirstColumn.appendChild(pLocation)
  divFirstColumn.appendChild(pDes)

  pStatus.textContent = job.status
  pPeriod.textContent = job.period

  divSecondColumn.appendChild(pStatus)
  divSecondColumn.appendChild(pPeriod)

  divJob.appendChild(divFirstColumn)
  divJob.appendChild(divSecondColumn)
  article.appendChild(divJob)
  section.appendChild(article)
}
