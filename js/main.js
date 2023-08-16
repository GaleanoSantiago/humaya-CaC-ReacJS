const menu = document.getElementById("navbar");

addEventListener("scroll",()=>{
    
    //scroll para que el menu se fije en el top de la pantalla
    
    const heightScreen = screen.height;
    let pixel = window.scrollY;
    
    if(pixel>400){
        menu.classList.add("fixed")
    }else{
        menu.classList.remove("fixed");
    }
})