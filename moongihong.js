div = document.getElementsByTagName("div")
// console.log(div)
makeP = document.createElement("p")
p = document.getElementsByTagName("p")
button = document.getElementsByTagName("button")

// random = Math.floor(Math.random()*8-0 + 0)
// console.log(random)

for(i=0; i<div.length; i++){
  div[i].style.width = "100px"
  div[i].style.height = "100px"
  div[i].style.backgroundColor = "grey"
}

makeTarget = function(random){
  random = Math.floor(Math.random()*9-0 + 0)
  // random = Math.floor(Math.random()*8-0 + 0)
  // => 0~7까지 나옴
  
  div[random].appendChild(makeP)
  p[0].style.width = "30px"
  p[0].style.height = "30px"
  p[0].style.backgroundColor = "red"
  // p[0].style.backgroundImage = ""
}

for(i=0; i<div.length; i++){
div[i].addEventListener("click",function(event){
  if(event.target === p[0]){
    console.log(event)
    p[0].remove()
    makeTarget()
  }
})
}

button[0].addEventListener("click",function(){
  makeTarget()
})

exports.module = makeTarget()
// 타겟 div 안에 p태그로 랜덤으로 생성