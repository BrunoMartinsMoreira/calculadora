function criaCalculadura() {
   return {
      display: document.querySelector('.display'),

      //apaga tudo o que foi digitado
      inicia() {
         this.clickBtn();
         this.pressEnter();
      },

      pressEnter() {
         this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
               this.realizaConta()
            }
         });
      },

      realizaConta() {
         let conta = this.display.value;
         try {
            conta = eval(conta);

            /* 
            aprendam como arrumar um bug XD
            if (!conta) {
                alert('Conta inválida, geralmente elas são feitas usando números!')
                return;
             }*/

            this.display.value = conta;
         } catch (erro) {
            alert('Conta inválida, geralmente elas são feitas usando números!')
            return;
         }
      },

      clearDisplay() {
         this.display.value = '';
      },

      //apaga um elemento digitado por vez
      apagaUm() {
         this.display.value = this.display.value.slice(0, -1)
      },

      clickBtn() {
         document.addEventListener('click', (event) => { // com arrow functions o this sempre sera o objeto que criou o elemento, nesse caso o this sera a calculadora
            const element = event.target;
            if (element.classList.contains('btn-num')) {
               this.btnParaDisplay(element.innerText);
            };

            if (element.classList.contains('btn-clear')) {
               this.clearDisplay();
            };

            if (element.classList.contains('btn-del')) {
               this.apagaUm();
            };

            if (element.classList.contains('btn-eq')) {
               this.realizaConta();
            };
         })
      },

      //para aparecer no display o valor digitado concatenado com outros valores  
      btnParaDisplay(valor) {
         this.display.value += valor;
      },
   }
}
const calculadora = criaCalculadura();
calculadora.inicia();