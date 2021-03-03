const number = document.getElementById('number')
const run = document.getElementById('run')
let answer = document.getElementById('answer')


function tabuada () {
  var numb = Number(number.value)
  var res = 0
  answer.innerHTML = ''
  if(numb == 0){
    numb = 1
  }
  for (var i = 1; i <= 10 ; i++) {
    let item = document.createElement('option')
    res = numb * i
    item.text = `${numb} * ${i} = ${res}`
    answer.appendChild(item)
  }
}

run.addEventListener('click', tabuada)