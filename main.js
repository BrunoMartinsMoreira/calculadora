function createCalculator() {
   return {
      display: document.querySelector('.display'),


      startCalculator() {
         this.clickBtn();
         this.pressEnter();
         this.pressDelete();
      },

      pressEnter() {
         this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
               this.startCalculation()
            }
         });
      },

      pressDelete() {
         this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 46) {
               this.clearDisplay();
            }
         })
      },

      startCalculation() {
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


      deleteCharacter() {
         this.display.value = this.display.value.slice(0, -1)
      },

      clickBtn() {
         document.addEventListener('click', (event) => { // com arrow functions o this sempre sera o objeto que criou o elemento, nesse caso o this sera a calculator
            const element = event.target;
            if (element.classList.contains('btn-num')) {
               this.enterValuesInDisplay(element.innerText);
            };

            if (element.classList.contains('btn-clear')) {
               this.clearDisplay();
            };

            if (element.classList.contains('btn-del')) {
               this.deleteCharacter();
            };

            if (element.classList.contains('btn-eq')) {
               this.startCalculation();
            };
         })
      },


      enterValuesInDisplay(valor) {
         this.display.value += valor;
      },
   }
}
const calculator = createCalculator();
calculator.startCalculator();
