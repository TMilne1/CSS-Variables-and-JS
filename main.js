window.onload = function (){
var style = document.querySelectorAll('.controls input') //input label for base color

function update(){
    const suffix = this.dataset.sizing || ""
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
   

}

style.forEach((item)=>{
    item.addEventListener('change', update)
    item.addEventListener('mouseover', update)
})

}
