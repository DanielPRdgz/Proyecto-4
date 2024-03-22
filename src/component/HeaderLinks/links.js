import './links.css'
export const linkHeader = (ul, link) => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.textContent = link
  a.href = '#'
  li.appendChild(a)
  ul.appendChild(li)
}
export const linkrrss = (ul, url) => {
  const li = document.createElement('li')
  const img = document.createElement('img')
  const a = document.createElement('a')
  a.href = '#'
  img.src = url
  a.appendChild(img)
  li.appendChild(a)
  ul.appendChild(li)
}
