const btnShareShow = document.getElementById('btnShareShow')
const btnShareFloatShow = document.getElementById('btnShareFloatShow')
const btnShareClose = document.getElementById('btnShareClose')

const personContent = document.getElementById('personContent')
const shareContent = document.getElementById('shareContent')
const shareContentFloat = document.getElementById('shareContentFloat')

console.log(btnShareShow)
console.log(btnShareFloatShow)

btnShareShow.onclick = () => {
  personContent.classList.add('hidden')
  shareContent.classList.remove('hidden')
  shareContent.classList.add('flex')
}

btnShareClose.onclick = () => {
  personContent.classList.remove('hidden')
  personContent.classList.add('flex')
  shareContent.classList.add('hidden')
}

btnShareFloatShow.onclick = () => {
  if(shareContentFloat.classList.contains('hidden')) {    
    shareContentFloat.classList.remove('hidden')  
    shareContentFloat.classList.add('flex')    
    btnShareFloatShow.classList.add('bg-[var(--Very-Dark-Grayish-Blue)]')      
    btnShareFloatShow.classList.add("bg-[url('./images/icon-share-light.svg')]")      
  } else {    
    shareContentFloat.classList.remove('flex')  
    shareContentFloat.classList.add('hidden')    
    btnShareFloatShow.classList.remove('bg-[var(--Very-Dark-Grayish-Blue)]')    
    btnShareFloatShow.classList.remove("bg-[url('./images/icon-share-light.svg')]")      
  }
}
