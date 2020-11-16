window.onload = init;

function init(){
    let polaroids = document.querySelector(".polaroids").querySelectorAll(".flipContainer .insideFlipContainer");

    let flipCon = function(event){
        
        this.style.transform = "rotateY(180deg) matrix(1.25, 0, 0, 1.25, 0, 0)";
        this.querySelector(".back").style.overflow="auto";

        this.removeEventListener = ("click", flipCon);
        this.addEventListener("mouseleave", flipBack);
        
    };

    let flipBack = function(event){
        this.querySelector(".back").style.overflow="hidden";
        this.style.zIndex = "initial";
        this.style.transform = "scale(1)";
        
        
    };

    let makeBig = function(event){
        this.querySelector(".back").style.overflow="hidden";
        this.style.zIndex = "1";
        this.style.transform ="matrix(1.25, 0, 0, 1.25, 0, 0)"; 
        this.addEventListener("mouseleave", flipBack);
    }

    polaroids.forEach(function(pola){
        pola.addEventListener("mouseenter", makeBig);
        pola.addEventListener("click", flipCon);
        
    })

}