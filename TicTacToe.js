class TicTacToe extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.drawGame()
    }

    connectedCallback() {
        //console.log('view is visible')
    }

    drawGame() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var button = document.createElement('button')
                button.onclick = () => {
                    button.textContent = 'O'
                }
                this.shadow.appendChild(button)
            }
            var br = document.createElement('br')
            this.shadow.appendChild(br)
        }
    }

}

customElements.define('tictactoe-jofd', TicTacToe)