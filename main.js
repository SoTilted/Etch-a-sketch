const N=16
const screenSize=960
let container=document.querySelector('.container')
let mouseCondition=true;

const buttonClickedAndHovered = (e) => {
  document.onmousedown = () => (mouseCondition=false);
  document.onmouseup = () => (mouseCondition=true);
  if(mouseCondition)return;
  currentBox=document.getElementById(e.target.id);
  rgbValues=currentBox.dataset.value.split(',')
  switch (colour.textContent){
    case 'Black':
      if(parseFloat(rgbValues[0])===0.0 && parseFloat(rgbValues[1])===0.0 && parseFloat(rgbValues[2])===0.0){break;}
      else{
        for(let i=0; i<3; i++){
          if(parseFloat(rgbValues[i])!=0.0){
            console.log(rgbValues[i]);
            rgbValues[i]=rgbValues[i]-25.5;
          }
        } 
        currentBox.dataset.value=rgbValues
        currentBox.style.backgroundColor=`rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`;
        break;
      }
    case 'Red':
      if(parseFloat(rgbValues[0])===255.0 && parseFloat(rgbValues[1])===0.0 && parseFloat(rgbValues[2])===0.0){break;}
      else{
        for(let i=1; i<3; i++){
          if(parseFloat(rgbValues[i])!=0.0){
            console.log(rgbValues[i]);
            rgbValues[i]=rgbValues[i]-25.5;
          }
        } 
        currentBox.dataset.value=rgbValues
        currentBox.style.backgroundColor=`rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`;
        break;
      }
    case 'Green':
      if(parseFloat(rgbValues[0])===0.0 && parseFloat(rgbValues[1])===255.0 && parseFloat(rgbValues[2])===0.0){break;}
      else{
        for(let i=0; i<3; i+=2){
          if(parseFloat(rgbValues[i])!=0.0){
            console.log(rgbValues[i]);
            rgbValues[i]=rgbValues[i]-25.5;
          }
        } 
        currentBox.dataset.value=rgbValues
        currentBox.style.backgroundColor=`rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`;
        break;
      }
    case 'Blue':
      if(parseFloat(rgbValues[0])===0.0 && parseFloat(rgbValues[1])===0.0 && parseFloat(rgbValues[2])===255.0){break;}
      else{
        for(let i=0; i<2; i++){
          if(parseFloat(rgbValues[i])!=0.0){
            console.log(rgbValues[i]);
            rgbValues[i]=rgbValues[i]-25.5;
          }
        } 
        currentBox.dataset.value=rgbValues
        currentBox.style.backgroundColor=`rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`;
        break;
      }
    
    case 'White':
      rgbValues=[255,255,255]
      currentBox.dataset.value=rgbValues
      currentBox.style.backgroundColor=`rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`;
  }
}

function createGrid(Size){
    let boxes=document.getElementsByClassName("grid-container");
    for (let i=0; i<Size*Size; i++){
        let grid=document.createElement("div");
        grid.setAttribute("class","grid-container");
        grid.setAttribute("id",`${i}`);
        grid.setAttribute('data-value',[255,255,255])
        grid.style.boxSizing = 'border-box'
        grid.style.width=`${100/Size}%`
        grid.style.height=`${100/Size}%`
        container.appendChild(grid);
    }
    for (let box of boxes) {
      box.addEventListener("mouseover", buttonClickedAndHovered); 
    }
}

let buttons = document.getElementsByTagName('button')
for (let button of buttons){
  if (button.id==='grid'){
    button.addEventListener('click',()=>{
      let size=parseInt(prompt("Choose size of grid!(max size is 100.)"));
      while( size>100 || size <=0 || isNaN(size)){
        size=parseInt(prompt("Bad size input, please try again."));
      }
      container.innerHTML='';
      createGrid(size);
    });
  }
  else if(button.id==='colour'){
    let counter = 1;
    coloursList=['Black','Red','Green','Blue','White']
    //const colour = document.getElementById('colour');
    button.style.backgroundColor='black'
    button.addEventListener('click',()=>{
      button.textContent=coloursList[counter%5];
      button.style.backgroundColor=`${coloursList[counter%5]}`
      button.style.color=`${coloursList[counter%5]}`
      counter++;
    });
  }
  else{
    button.addEventListener('click',()=>{
      container.innerHTML='';
      createGrid(N);
    });     
  };
}

createGrid(N);
