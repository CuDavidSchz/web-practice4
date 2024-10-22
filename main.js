const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        
        // Para el botón de C
        if (boton.id === "c")
        {
            pantalla.textContent = "0";
            return;
        }

        // Para borrar
        if (boton.id ==="borrar")
        {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Syntax Error")
            {
                pantalla.textContent = "0";
            }
            else
            {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                
            }
            return;
        }


        if (boton.id === "igual")
        {
            try 
            {
                const operacion = pantalla.textContent;

                if (operacion.includes("/0"))
                {
                    throw new SyntaxError("Syntax Error");
                }

                pantalla.textContent = eval(operacion);

            }
            catch(error)
            {
                pantalla.textContent = "Syntax Error";
            }
            return;
        }

        // Para manipular los números en pantalla
        if (pantalla.textContent === "0" || pantalla.textContent === "Syntax Error")
        {
            pantalla.textContent = botonApretado;
        }
        else
        {
            pantalla.textContent += botonApretado;
        }
    })
})