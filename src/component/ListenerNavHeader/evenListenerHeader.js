export const evenListenerHeader = () => {
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
