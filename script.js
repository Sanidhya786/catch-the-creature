var screen = document.querySelectorAll(".screen")
var startBtn = document.querySelector("button")
var allElems = document.querySelectorAll(".elem")
var playGround = document.querySelector(".playground")
var selected = ""
var scoreValue = document.querySelector(".time-score h5 span")
var score = 0;


startBtn.addEventListener("click",function(){
    screen[1].style.transform = "translateY(-100%)"
    
})


allElems.forEach(function(elem){
    
    elem.addEventListener("click",function(){
        
        selected = elem.childNodes[3].getAttribute("src")
        screen[2].style.transform = "translateY(-200%)";
        
    
        // ye isliye diya h taki hr 1000 miliseconds me image create hogi 
        setInterval(function(){
            createImage()
        },1000)
       
        
    })
})


function createImage(){
    var newImg = document.createElement("img");   
    newImg.setAttribute("src",selected);
    
    var x = Math.floor(Math.random()*100);
    var y = Math.floor(Math.random()*100);
    var rot = Math.floor(Math.random()*360);
    newImg.style.left = x+"%";
    newImg.style.top = y+"%";
    newImg.style.rotate = rot+"deg";
        
    playGround.appendChild(newImg);
     
    //  ye hr 1200 miliseconds me image remove krega.
    setTimeout(function(){
        //  "removeChild" child ko remove kr deta h
        playGround.removeChild(newImg)
    },1200)

    catchImage();
}
  

function catchImage(){
    document.querySelector(".playground img").addEventListener("click",function(){
        score++;
        scoreValue.innerHTML = score;
    })
}   



// function catchImage(){
//     var image = document.querySelector(".playground img")
//     image.forEach(function(elem){
//         elem.addEventListener("click",function(){

//             score++;
//             scoreValue.innerHTML = score;
//         })


//     })
// }   


    
    

