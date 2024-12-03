const rotators = document.querySelectorAll('.rotator')

function startRotator(rotator) {
  const cases = rotator.querySelectorAll('.rotator__case')
  let currentIndex = 0;
  
  function switchCase () {
    const currentCase = cases[currentIndex]
    currentCase.classList.remove('rotator__case_active')
    
    currentIndex = (currentIndex + 1) % cases.length
    const nextCase = cases[currentIndex]
    
    nextCase.classList.add('rotator__case_active')
    nextCase.style.color = nextCase.dataset.color
    
    const speed = nextCase.dataset.speed || 100
    setTimeout(switchCase, speed)
  }
  switchCase()
}
rotators.forEach(startRotator)
