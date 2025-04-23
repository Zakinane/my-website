//////////////////////////////////////////////////// Waving
let welcome = document.getElementById('welcome')
// let waving = document.getElementById('waving')




/////////////////////////////////////////////////// Annoying
var clicks = 0
let annoying = false

welcome.addEventListener('click', () => {
    clicks++
    console.log("hey")
    if (clicks === 10)
        annoying = true
       console.log("nullos")
   
    setTimeout(() => {
       clicks = 0
   }, 5000);
   
})

if(annoying === true){
    whatYouDeserve()    
}

function whatYouDeserve(){
    
}

 

