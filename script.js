let list =document.querySelectorAll(".listItem")
console.log(list)

// gsap.to(list,{
//     duration: 2,
//     x:-100, 
// })
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
console.log(shoppingList)
renderingList()

    form.reset()
}

const renderingList=function(){
renderContainer.innerHTML=""
   shoppingList.forEach(element => {
    let pTag=document.createElement("p")
    pTag.classList.add("listItem")
    pTag.textContent=element.name
    if (element.purchased) {
        pTag.style.textDecoration = "line-through";
    }
    renderContainer.append(pTag)

   });

}
renderContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("listItem")){
        strikeThrough(e)
    }
 
})

const strikeThrough = function (e) {
    let strickElement = e.target;
    let listElements = renderContainer.children;
    let index = Array.from(listElements).indexOf(strickElement);
    shoppingList[index].purchased = !shoppingList[index].purchased;
    renderingList();
};


button.addEventListener("click",addShoppingList)
