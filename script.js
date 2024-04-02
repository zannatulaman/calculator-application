
document.addEventListener("DOMContentLoaded", () => {

    const displayInput = document.getElementById("displayInput");
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function(button) {
        button.addEventListener("click", () => {
            const buttontext = button.textContent
            //console.log(buttontext);
           
            if(buttontext === "Ac"){
                displayInput.value = "";

            }else if (buttontext === "Del"){
                displayInput.value = displayInput.value.slice(0, -1);

            }else if (buttontext === "="){
                
                try{
                    const result = eval(displayInput.value)
                   if (result === Infinity || result === -Infinity){
                       displayInput.value = "Error"
                   }else{
                       displayInput.value = result;
                   }
                }catch(error){
                    displayInput.value = "Error";
                }
                    
            }else{
                displayInput.value += buttontext;

            }

            

        })
    })

})