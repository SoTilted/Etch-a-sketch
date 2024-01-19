const N=16
const screenSize=960
let container=document.querySelector('.container')

for (let i=0; i<N*N; i++){
    let grid=document.createElement("div");
    grid.setAttribute("class","grid-container");
    grid.setAttribute("id",`${i}`);
    grid.style.minWidth=`${screenSize/N - 4}px`
    grid.style.minHeight=`${screenSize/N - 4}px`
    container.appendChild(grid);

}

const boxes=document.getElementsByClassName("grid-container");

const buttonHovered = (e) => {
    currentBox=document.getElementById(e.target.id);
    currentBox.style.backgroundColor='black';
    
}


for (let box of boxes) {
    box.addEventListener("mouseover", buttonHovered);
    
  }
