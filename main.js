const button = document.getElementById('button')
const result = document.getElementById("result")
const newUl = document.createElement("ul")
const input = document.getElementById('input')
const editIcon = document.createElement("i")
// editIcon.className = "bi bi-pencil-square";
result.appendChild(newUl)
// console.log(editIcon)


button.addEventListener("click",function(){
if(input.value == ""){
  alert("Fill in gap")
}
else{
  const value = input.value
  console.log(value)
  const newLi = document.createElement("li")
  // newLi.insertBefore(editIcon, newLi.childNodes[0]);
  newLi.append(editIcon)
  newLi.innerText = value
  newUl.appendChild(newLi)
  input.value = ""
}
})











