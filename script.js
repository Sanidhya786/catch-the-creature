var screen = document.querySelectorAll(".screen")
var startBtn = document.querySelector("button")
var allElems = document.querySelectorAll(".elem")
var playGround = document.querySelector(".playground")
var selected = ""


startBtn.addEventListener("click",function(){
    screen[1].style.transform = "translateY(-100%)"
    
})


allElems.forEach(function(elem){
    
    elem.addEventListener("click",function(){
        
        selected = elem.childNodes[3].getAttribute("src")
        screen[2].style.transform = "translateY(-200%)";
        
        // createImage();
       
        addImage();
    })
})



function createImage(){
    var newImg = document.createElement("img");   
    newImg.setAttribute("src",selected);
    
        var obj = getRandom()
        newImg.style.left = obj.x+"%";
        newImg.style.top = obj.y+"%";
        newImg.style.rotate = obj.rot+"deg";
        
        playGround.appendChild(newImg);
        
        
        catchImage()
    }
    
   
    function addImage(){
        setTimeout(createImage,2000)
    }
    
    function getRandom(){
        var x = Math.floor(Math.random()*100);
        var y = Math.floor(Math.random()*100);
        var rot = Math.floor(Math.random()*360);
        
        return {x,y,rot}
    }
    // Note:-   kuchh concept smjhne k liye class4,5 dekhen  
    
    
    function catchImage(){
    var playImage = document.querySelector(".playground img")

        playImage.addEventListener("click",function(){
            var obj = getRandom()
            
           
        })
    }
    
    
    

