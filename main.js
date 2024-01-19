const N=16
const screenSize=960
let container=document.querySelector('.container')

function createGrid(Size){
    let boxes=document.getElementsByClassName("grid-container");

    for (let i=0; i<Size*Size; i++){
        let grid=document.createElement("div");
        grid.setAttribute("class","grid-container");
        grid.setAttribute("id",`${i}`);
        grid.setAttribute('data-value','255')
        grid.style.minWidth=`${screenSize/Size - 4}px`
        grid.style.minHeight=`${screenSize/Size - 4}px`
        container.appendChild(grid);
    }

    const buttonHovered = (e) => {
        
        currentBox=document.getElementById(e.target.id);
        if(parseFloat(currentBox.dataset.value)===0.0){}
        else{
            currentBox.dataset.value=parseFloat(currentBox.dataset.value)-25.5
            currentBox.style.backgroundColor=`rgb(${currentBox.dataset.value},${currentBox.dataset.value},${currentBox.dataset.value})`;
        }
       
    }
    for (let box of boxes) {
        box.addEventListener("mouseenter", buttonHovered); 
      }
    
}




  const button = document.getElementById('button')
  button.addEventListener('click',()=>{
    let size=parseInt(prompt("Choose size of grid!(max size is 100.)"));
    while( size>100 || size <=0 ){
        size=parseInt(prompt("Bad size input, please try again."));
    }
    container.innerHTML='';
    createGrid(size);
  });


createGrid(N);