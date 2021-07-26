/*
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
         let calc= this.display.value;
         try {
            calc= eval(calc);

            /*
            aprendam como arrumar um bug XD
            if (!calc) {
                alert('calcinválida, geralmente elas são feitas usando números!')
                return;
             }*/

/*        this.display.value = conta;
     } catch (erro) {
        alert('calcinválida, geralmente elas são feitas usando números!')
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
*/
//refazendo com constructor functions
function Calculator() {
   this.display = document.querySelector('.display');

   this.eventClicks = () => {
      document.addEventListener('click', event => {
         const element = event.target;

         if (element.classList.contains('btn-num')) {
            this.addNumDisplay(element)
         }

         if (element.classList.contains('btn-clear')) {
            this.clear()
         }

         if (element.classList.contains('btn-del')) {
            this.del()
         }

         if (element.classList.contains('btn-eq')) {
            this.initCalc()
         }
      });
   };

   this.initCalc = () => {
      try {
         const calc = eval(this.display.value);
         this.display.value = calc;
      } catch (err) {
         alert('Para realizar uma conta favor digitar números.')
         return;
      }
   };

   this.clear = () => {
      this.display.value = "";
   };

   this.addNumDisplay = (element) => {
      this.display.value += element.innerText;
      this.display.focus();
   };

   this.del = () => {
      this.display.value = this.display.value.slice(0, -1)
   };

   this.pressEnter = () => {
      this.display.addEventListener('keyup', (event) => {
         if (event.keyCode === 13) {
            this.initCalc()
         }
      });
   },

      this.pressDelete = () => {
         this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 46) {
               this.clear();
            }
         })
      };

   this.initApp = () => {
      this.eventClicks();
      this.pressDelete();
      this.pressEnter();
   };
}

const calculator = new Calculator();
calculator.initApp();