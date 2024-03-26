import './links.css'
export const linkHeader = (ul, link, id) => {
  const li = document.createElement('li')
  li.setAttribute('id', id)
  const a = document.createElement('a')
  a.textContent = link
  a.href = '#'
  li.appendChild(a)
  ul.appendChild(li)
}

export const linkrrss = (ul, key, imageUrl, pageUrl) => {
  const li = document.createElement('li')
  const img = document.createElement('img')
  const a = document.createElement('a')
  a.href = pageUrl
  img.src = imageUrl
  a.appendChild(img)
  li.appendChild(a)
  ul.appendChild(li)
}
