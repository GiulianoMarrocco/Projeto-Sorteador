function generateNumber(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".inpu-max").value)
    const result = Math.floor(Math.random() * (max - min + 1) + min)
    document.querySelector("h1").innerHTML = "Número Sorteado: " + result

   }

