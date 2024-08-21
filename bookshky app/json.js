//select popup an overlay
var pop=document.querySelector(".popup")
var over=document.querySelector(".overlay")
var add=document.getElementById("popupbutton")

add.addEventListener("click",function(){
    pop.style.display="block"
    over.style.display="block"
})
//select cancel button
var cancelbutton=document.getElementById("removebook")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    pop.style.display="none"
    over.style.display="none"

})
//select container ,add,booktitle,author,des
var container=document.querySelector(".container")
var add=document.getElementById("addbook")
var title=document.getElementById("book")
var author=document.getElementById("author")
var Des=document.getElementById("bookdes")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box")
    div.innerHTML= `<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>
        ${Des.value}
    </p> <button onclick=" Delete(event)">Delete</button>`
    container.append(div)
    pop.style.display="none"
    over.style.display="none"
})
function Delete(event){
    event.target.parentElement.remove()
}

