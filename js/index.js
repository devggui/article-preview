const btnShareShow = document.getElementById('btnShareShow')
const btnShareClose = document.getElementById('btnShareClose')
const personContent = document.getElementById('personContent')
const shareContent = document.getElementById('shareContent')

btnShareShow.onclick = () => {
  personContent.classList.add('hidden')
  shareContent.classList.add('flex')
  shareContent.classList.remove('hidden')
}

btnShareClose.onclick = () => {
  personContent.classList.remove('hidden')
  personContent.classList.add('flex')
  shareContent.classList.add('hidden')
}