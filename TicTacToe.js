class TicTacToe extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.gameSize = 3
        this.showPromptInit()
        this.drawGame()
        
        this.array = new Array(this.gameSize)
        for (var i = 0; i < this.array.length; i++) {
            this.array[i] = new Array(this.gameSize)
        }

    }

    showPromptInit() {
        var doc = prompt('Ingresa el tamaño del juego',
            '')
        if (doc != null) {
            this.gameSize = doc
        }
    }

    connectedCallback() {
    }

    drawGame() {
        this.arrayCase = []
        for (var i = 0; i < this.gameSize; i++) {
            for (var j = 0; j < this.gameSize; j++) {
                var button = document.createElement('button')
                this.arrayCase.push(button)
                button.addEventListener('click', this.play.bind(this))
                this.shadow.appendChild(button)
            }
            var br = document.createElement('br')
            this.shadow.appendChild(br)
        }
    }

    play(event) {
        console.log('event.target:', event.target, this)
        let input = prompt('¿Que valor deseas colocar?')
        if (input === 'x') {
            event.target.innerHTML = 'x'
        } if (input === 'o') {
            event.target.innerHTML = 'o'
        }
        this.chekGame()
    }

    chekGame() {

        let variableX = 0
        for (let i = 0; i < this.arrayCase; i++) {
            if (this.arrayCase[i].innerHTML === 'x') {
              variableX += 1
            }
            for (let j = 0; j < this.arrayCase; j++) {
            }
          }

          if (variableX == this.amountOfSquaresDefault) {
            alert('X WON')
          }
    }

}

customElements.define('tictactoe-jofd', TicTacToe)