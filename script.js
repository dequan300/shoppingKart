let list =document.querySelectorAll(".listItem")
console.log(list)

gsap.to(list,{
    duration: 2,
    x:-100, 
})
const shoppingList=[]
const renderContainer=document.querySelector(".renderContainer")
const button= document.querySelector("button")
const form=document.querySelector("#form")

const addShoppingList =function(e){
e.preventDefault()
const input=document.querySelector("input")
if(!input.value){
input.value=""
}else if(input.value!=""){
shoppingList.push({name:input.value, purchased:false})
}
renderingList(e)

    form.reset()
}

const renderingList=function(e){
console.log("hello")
}

button.addEventListener("click",addShoppingList)
