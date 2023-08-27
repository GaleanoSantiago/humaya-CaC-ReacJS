const menu = document.getElementById("navbar");
const openCloseSign = document.querySelectorAll(".close-open-sign");
const btnForm = document.getElementById("btnSubmit");
const inputsForm = document.querySelectorAll(".form-control");
// console.log(inputsForm);

addEventListener("scroll",()=>{
    
    //scroll para que el menu se fije en el top de la pantalla
    
    const heightScreen = screen.height;
    let pixel = window.scrollY;
    
    if(pixel>00){
        menu.classList.add("fixed")
    }else{
        menu.classList.remove("fixed");
    }
})

const horaAbierto = ()=>{
    // Obtener la fecha y hora actual
    const now = new Date();

    // Obtener la hora y los minutos de la fecha actual
    const hours = now.getHours();
    const minutes = now.getMinutes();
    // Comprobar si la hora está entre 7:30 am y 11:30 pm
    // Comprobar si la hora está entre 7:30 am y 11:30 am o entre 4:30 pm y 10:00 pm
    if (
        (hours > 7 && hours < 11) || (hours === 7 && minutes >= 30) || 
        (hours === 11 && minutes <= 30) ||
        (hours > 16 && hours < 22) || (hours === 16 && minutes >= 30) || 
        (hours === 22 && minutes <= 0)
    ){
        openCloseSign.forEach(sign =>{
            sign.textContent="Abierto";
            sign.classList="text-success";
        })

    } else {
        openCloseSign.forEach(sign =>{
            sign.textContent="Cerrado";
            sign.classList="text-danger";
        })
    }
}

btnForm.addEventListener("click",(e)=>{
    e.preventDefault();
    inputsForm.forEach(input =>{
        input.value="";
    });
    alert("Correo Enviado");
})

horaAbierto();