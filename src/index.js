document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector('form')
  form.addEventListener('submit', (event) =>{
    event.preventDefault()
    let p = document.createElement('p')
    let input = document.querySelector('#new-task-description').value
    let div = document.querySelector('#main-content')
    p.textContent = input;
    let btn = document.createElement('button')
    btn.textContent = 'X'
    btn.addEventListener('click', ()=>{
      p.remove()
    })
    p.appendChild(btn)


    div.appendChild(p)

    form.reset()

  })
  
 
})
 