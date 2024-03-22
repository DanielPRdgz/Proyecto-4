export const techStackSkills = (url, ul) => {
  const li = document.createElement('li')
  const img = document.createElement('img')
  const a = document.createElement('a')
  a.href = '#'
  img.src = url
  a.appendChild(img)
  li.appendChild(a)
  ul.appendChild(li)
}
