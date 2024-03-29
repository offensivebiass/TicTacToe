class TicTacToe extends HTMLElement {

    constructor() {
        super()

        this.gameSize = 3
        this.button = null
        this.shadow = this.attachShadow({ mode: 'open' })
        let link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('type', 'text/css')
        link.setAttribute('href', './style.css')
        this.shadow.appendChild(link)
        this.init()
        this.showPromptInit()
    }

    init() {
        this.turn = 0
        this.player1 = null
        this.player2 = null
        this.drawGame()
    }

    showPromptInit() {
        var doc = prompt('Ingresa el tamaño del juego',
            '')
        if (doc != null) {
            this.gameSize = doc
        }
    }

    drawGame() {
        this.arrayCase = []
        for (var i = 0; i < this.gameSize; i++) {
            this.arrayCase[i] = []
            for (var j = 0; j < this.gameSize; j++) {
                this.button = document.createElement('button')
                this.arrayCase[i].push(this.button)
                this.button.addEventListener('click', this.play.bind(this))
                this.shadow.appendChild(this.button)
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
                        this.reloadPage()
                    }
                }
                if (this.arrayCase[i][j].innerHTML === this.player2) {
                    variableO += 1
                    if (variableO == this.gameSize) {
                        alert('Gano el jugador ' + this.player2)
                        this.reloadPage()
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
                        this.reloadPage()
                    }
                }
                if (this.arrayCase[i][j].innerHTML === this.player2) {
                    variableO += 1
                    if (variableO == this.gameSize) {
                        alert('Gano el jugador ' + this.player2)
                        this.reloadPage()
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
                    this.reloadPage()
                }
            }
            if (this.arrayCase[i][i].innerHTML === this.player2) {
                variableO += 1
                if (variableO == this.gameSize) {
                    alert('Gano el jugador ' + this.player2)
                    this.reloadPage()
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
                        this.reloadPage()
                    }
                }
                if (this.arrayCase[i][j].innerHTML === this.player2) {
                    variableO += 1
                    if (variableO == this.gameSize) {
                        alert('Gano el jugador ' + this.player2)
                        this.reloadPage()
                    }
                }
                i += -1
                j += 1
            }
            variableX = 0
            variableO = 0
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'game') {
            if (oldValue != null) {
                console.log(oldValue + " " + newValue)
                this.gameSize = newValue
                this.init()
            }
        }
    }

    static get observedAttributes() {
        return ['game']
    }

    reloadPage() {
        document.location.reload(true)
    }

}

customElements.define('tictactoe-jofd', TicTacToe)