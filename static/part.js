
document.querySelector('#newuser1').addEventListener('click', function(){
    document.querySelector('.parent').style.display = 'flex' ;
})



// Closing the pop-up when someone presses 'ESCAPE' key.
document.querySelector('body').addEventListener('keydown', function(e){

    if(e.key === "Escape")
    {
        document.querySelector('.parent').style.display = 'none' ;
    }
    else
    console.log("some other key is pressed") ;

    // if(e.key === 'ESCAPE')
    // document.querySelector('.parent').style.display = 'none' ;

})




// Closing the pop-up window when someone click on the 
// CLOSE button (+ sign rotated with 45-degree)

document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.parent').style.display = 'none' ;
})