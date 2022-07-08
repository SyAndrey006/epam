const firstimg = document.querySelector('.first_image');
const leftButton = document.querySelector('#left_button');
const rightButton = document.querySelector('#right_button');

let leftmargin = 0;

leftButton.onclick = () =>{
    leftmargin += 450;
    console.log(leftmargin)
    firstimg.style.marginLeft = leftmargin + 'px';

}

rightButton.onclick = () =>{
    leftmargin -= 450;
    console.log(leftmargin  )
    firstimg.style.marginLeft = leftmargin + 'px';

}
