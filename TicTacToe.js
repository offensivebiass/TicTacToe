class TicTacToe extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.gameSize = 3
        this.drawGame()
        this.turn = 0
        this.player1 = null
        this.player2 = null
    }

    /*showPromptInit() {
        var doc = prompt('Ingresa el tamaño del juego',
            '')
        if (doc != null) {
            this.gameSize = doc
        }
    }*/

    connectedCallback() {
    }

    drawGame() {
        var doc = prompt('Ingresa el tamaño del juego',
            '')
        if (doc != null) {
            this.gameSize = doc
        }
        this.arrayCase = []
        for (var i = 0; i < this.gameSize; i++) {
            this.arrayCase[i] = []
            for (var j = 0; j < this.gameSize; j++) {
                var button = document.createElement('button')
                this.arrayCase[i].push(button)
                button.addEventListener('click', this.play.bind(this))
                this.shadow.appendChild(button)
            }
            var br = document.createElement('br')
            this.shadow.appendChild(br)
        }
    }

    play(event) {
        if (this.player1 == null) {
            this.player1 = prompt('Jugador uno, elige tu ficha')
        }
        if (this.turn == 0) {
            event.target.innerHTML = this.player1
            this.turn = 1
        } else {
            if (this.player2 == null) {
                this.player2 = prompt('Jugador dos, elige tu ficha')
            }
            event.target.innerHTML = this.player2
            this.turn = 0
        }
        /*let input = prompt('Jugador uno, elige tu ficha') 
        if (input === 'x') {
            event.target.innerHTML = 'x'
        } if (input === 'o') {
            event.target.innerHTML = 'o'
        }*/
        this.chekGame()
    }

    chekGame() {
        let variableX = 0
        let variableO = 0
        //Validate Horizontal
        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                if (this.arrayCase[i][j].innerHTML === this.player1) {
                    variableX += 1
                    if (variableX == this.gameSize) {
                        alert('Gano el jugador ' + this.player1)
                        this.drawGame()
                    }
                }
                if (this.arrayCase[i][j].innerHTML === this.player2) {
                    variableO += 1
                    if (variableO == this.gameSize) {
                        alert('Gano el jugador ' + this.player2)
                        this.drawGame()
                    }
                }
            }
            variableO = 0
            variableX = 0
        }
        //Validate Vertical
        for (let j = 0; j < this.gameSize; j++) {
            for (let i = 0; i < this.gameSize; i++) {
                if (this.arrayCase[i][j].innerHTML === this.player1) {
                    variableX += 1
                    if (variableX == this.gameSize) {
                        alert('Gano el jugador ' + this.player1)
                        this.drawGame()
                    }
                }
                if (this.arrayCase[i][j].innerHTML === this.player2) {
                    variableO += 1
                    if (variableO == this.gameSize) {
                        alert('Gano el jugador ' + this.player2)
                        this.drawGame()
                    }
                }
            }
            variableO = 0
            variableX = 0
        }
        //Validate Diagonal
        for (let i = 0; i < this.gameSize; i++) {

            if (this.arrayCase[i][i].innerHTML === this.player1) {
                variableX += 1
                if (variableX == this.gameSize) {
                    alert('Gano el jugador ' + this.player1)
                    this.drawGame()
                }
            }
            if (this.arrayCase[i][i].innerHTML === this.player2) {
                variableO += 1
                if (variableO == this.gameSize) {
                    alert('Gano el jugador ' + this.player2)
                    this.drawGame()
                }
            }
        }
        variableO = 0
        variableX = 0
        //Validate Diagonal reversed
        for (var k = 0; k <= this.gameSize - 1; k++) {
            var i = k
            var j = 0
            while (i >= 0) {
                if (this.arrayCase[i][j].innerHTML === this.player1) {
                    variableX += 1
                    if (variableX == this.gameSize) {
                        alert('Gano el jugador ' + this.player1)
                        this.drawGame()
                    }
                }
                if (this.arrayCase[i][j].innerHTML === this.player2) {
                    variableO += 1
                    if (variableO == this.gameSize) {
                        alert('Gano el jugador ' + this.player2)
                        this.drawGame()
                    }
                }
                i += -1
                j += 1
            }
            variableX = 0
            variableO = 0
        }
    }

}

customElements.define('tictactoe-jofd', TicTacToe)