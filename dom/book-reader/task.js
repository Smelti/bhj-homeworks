document.addEventListener('DOMContentLoaded', () => {
  
  const fontSize = document.querySelectorAll('.font-size')
  const text = document.querySelector('.book')
  
  fontSize.forEach(active => {
    active.addEventListener('click', (event) => {
      event.preventDefault()
      
      const size = active.dataset.size
      
      text.classList.remove('book_fs-small', 'book_fs-medium', 'book_fs-big')
      
      if (size === 'small') {
        text.classList.add('book_fs-small')
      }
      else if (size === 'medium') {
        text.classList.add('book_fs-medium')
      }
      else if (size === 'big') {
        text.classList.add('book_fs-big')
      }
      fontSize.forEach(active => active.classList.remove('font-size_active'))
      active.classList.add('font-size_active')
    })
  })
})
