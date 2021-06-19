// Share button components (need to get svg and path as well as div surrounding it)
const shareBtn = document.querySelector('#shareBtn'); // get share button background
const shareBtnArrow = document.querySelector('#shareBtn svg'); //get share button arrow
const shareBtnArrowPath = document.querySelector('#shareBtn svg path'); //get share button arrow path
// Share options contponents
const shareOpt = document.querySelector('#shareOpt'); // get share options container
 

// directly changing the css with js

document.addEventListener('click', (e) => { // add event listener to entire document so that user can close tooltip by clicking any other part of page
    if(e.target === shareBtn || e.target === shareBtnArrow || e.target === shareBtnArrowPath){ // if user clicks any element within the share button

        if(shareOpt.style.display === 'flex'){ // if the share options has a display of flex
            shareOpt.style.display = 'none'; // set the display of share options to none
            shareBtn.classList.remove('active'); // remove the class "active" from the share button

        } else{ //if the share options does not have a display of flex
            shareOpt.style.display = 'flex'; // give the share options a display of flex
            shareBtn.classList.add('active'); // give the share button the class of "active"
        }
     } else if (e.target !== shareBtn && e.target !== shareOpt) { // if the user clicks anything but the share button and share options
        shareOpt.style.display = 'none'; // give the share options a display of none
        shareBtn.classList.remove('active'); //remove the class "active" from the share button
    } 
})



