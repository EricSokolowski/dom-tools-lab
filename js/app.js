const input = document.querySelector('#ofChoice')
const btn = document.querySelector("#submit-button")
const ul = document.querySelector('#todo-list')
console.log(input)
console.log(btn)
console.log(ul)

btn.addEventListener('click', function(evt){
  if(input.value === '') return
  const li = document.createElement('li')
  li.textContent = input.value
  ul.appendChild(li)
  input.value = ''
})

console.log(ul)