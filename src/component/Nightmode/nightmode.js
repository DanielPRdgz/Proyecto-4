import './nightmode.css'
export const buttonNight = () => {
  const buttonMode = document.createElement('button')
  buttonMode.classList.add('switch')
  buttonMode.classList.add('active')
  buttonMode.id = 'switch'
  const spanSun = document.createElement('span')
  const spanNight = document.createElement('span')

  const sunIcon = document.createElement('i')
  sunIcon.classList.add('fa-solid', 'fa-sun')
  spanSun.appendChild(sunIcon)

  const moonIcon = document.createElement('i')
  moonIcon.classList.add('fa-solid', 'fa-moon')
  spanNight.appendChild(moonIcon)
  buttonMode.appendChild(spanSun)
  buttonMode.appendChild(spanNight)
  buttonMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    buttonMode.classList.toggle('active')
  })
  return buttonMode
}
