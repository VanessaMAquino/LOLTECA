class Validator{
    constructor() {
        this.validation [
            'data-min-length'
        ]
    }

    //iniciar a validação de todos os campos
    validate(form){

        //pegar os inputs
        let inputs = form.getElementsByTagName('input');

        //nao consigo saber quais precisam ser validados e quais nao precisam e para poder dar o loop precisa transformar o HTMLCollection -> array
        let inputsArray = [...inputs];

        //loop nos inputs e validações mediante ao q for encontrado
        inputsArray.forEach(function(input){
          
            //loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++){
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){
                    //transformar o data-min-length -> minlength (limpando a string para virar um método)
                    let method = this.validations[i].replace('data-', '').replace('-','')

                    //valor do input para poder manipular quando precisar
                    let value = input.getAttribute(this.validation[i]);

                    //invoca o método
                    this[method](input,value);
                }
            }
        }, this);
    }
    //verifica se um input tem um minimo de caracteres
    minlength(input, minValue) {
        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter pelo menos ${minValue} caeacteres`

        //se o comprimento de caractere do input for menor  que o valor minimo imprimir mensagem de erro
        if(inputLength < minValue){
            this.printMessage(input, errorMessage)
        }
    }
    //metodo para imprimir msgs de erro na tela
    printMessage(input, msg){
        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg; 
        
        let inputParent = input.parentNode;

        template.classList.remove('template');

        inputParent.appendChild(template);
    }
}

let form = document.getElementById("register-form");
let submit = document.getAnimations.getElementById("bnt-submit");


//evento que dispara as validações
submit.addEventLister('click', function(e) {
    
    e.preventDefault();

   Validator.validate(form);

});
