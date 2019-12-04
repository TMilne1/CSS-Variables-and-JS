window.onload = function (){
var style = document.querySelectorAll('.controls input') //input label for base color

function update(){
    console.log(this.value)

}

style.forEach((item)=>{
    item.addEventListener('change', update)
    item.addEventListener('mouseover', update)
})

}
