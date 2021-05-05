 var cover     = document.querySelector(".cover-2"),
     coverText = document.querySelectorAll(".overlay-text"),
     img       = document.querySelectorAll('[class*="image-"]'),
     close     = document.querySelectorAll(".close"),
     fade      = document.querySelector(".fade-in"),
     play      = document.querySelector(".cover img"),
     open      = document.querySelector(".hamburger-icon ");

//for the mobile view
open.addEventListener('click',()=>{
    document.querySelector(".mobile-nav").style.visibility = "visible";
  document.querySelector(".mobile-nav").style.width = "100%";
  document.querySelector(".side-nav-mobile").style.opacity= 1;
  document.querySelector(".close-moblile").style.opacity= 1;
})
  document.querySelector(".close-moblile").addEventListener('click',()=>{
    document.querySelector(".mobile-nav").style.width = "0%";
    document.querySelector(".side-nav-mobile").style.opacity= 0;
    document.querySelector(".close-moblile").style.opacity= 0;
        document.querySelector(".mobile-nav").style.visibility = "hidden";
  })
img.forEach((image, index)=>{
  image.addEventListener('click',(event)=>{
    cover.classList.add("overlay3");
        cover.style.transition = "background-color .55s ease-in";
      console.log(event.target.parentElement.className.slice(-1))
        console.log(event.target)
      const covered = coverText[(event.target.parentElement.className.slice(-1))-1]
        covered.style.display= "grid";
        cover.style.display ="block";
        console.log(covered);
        //cover.classList.remove("not-overlay3")
  })
})
close.forEach((closed, index)=>{
  closed.addEventListener("click", ()=>{
    //cover.classList.add("not-overlay3")
    cover.style.display ="none";
    //cover.classList.remove("overlay3");
     coverText[index].style.display = "none"
  })
});

function toTop(){
  var presentY = window.scrollY;
  var int = setInterval(function(){
    window.scrollTo(0,presentY);
    if(presentY > 600){
        presentY -= 80;
    }else if(presentY > 100){
      presentY -= 40;
    }else{presentY -= 10};

    if(presentY <= 0) clearInterval(int);
  }, 90/60);
}
document.querySelector(".top").addEventListener("click", toTop);
  if(window.scrollY >= 0){
      fade.classList.add("active")
}
