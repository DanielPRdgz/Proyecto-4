import './projectCards.css'
export const projectCards = (item, div) => {
  const articleCard = document.createElement('article')
  articleCard.classList.add('articleCard')
  const divImg = document.createElement('div')
  divImg.classList.add('divImgArticle')
  const divInfo = document.createElement('div')
  divInfo.classList.add('divInfoCard')
  const divLinks = document.createElement('div')
  divLinks.classList.add('divLinksCard')
  const img = document.createElement('img')
  const h5 = document.createElement('h5')
  const p = document.createElement('p')
  const a = document.createElement('a')
  img.src = item.preview
  h5.textContent = item.title
  p.textContent = item.description
  a.href = item.link
  a.textContent = item.link
  divImg.appendChild(img)
  divInfo.appendChild(h5)
  divInfo.appendChild(p)
  divLinks.appendChild(a)
  articleCard.appendChild(divImg)
  articleCard.appendChild(divInfo)
  articleCard.appendChild(divLinks)
  div.appendChild(articleCard)
}
