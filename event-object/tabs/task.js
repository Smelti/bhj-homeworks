const tabGroups = document.querySelectorAll('.tabs')
tabGroups.forEach(group => {
  const tabs = group.querySelectorAll('.tab')
  const content = group.querySelectorAll('.tab__content')
  
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(tab => tab.classList.remove('tab_active'))
      
      content.forEach(content => content.classList.remove('tab__content_active'))

      tab.classList.add('tab_active')
      content[index].classList.add('tab__content_active')
    })
  })  
})
