type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};
const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: JSON.parse(localStorage.getItem("saved-state")) || [],
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    currentState.currentGame.computerPlay = this.computerMove();
    return currentState.currentGame;
  },
  computerMove() {
    const moves = ["piedra", "papel", "tijera"];
    const randomN = Math.floor(Math.random() * 3);
    return moves[randomN];
  },
  pushToHistory(play: Game) {
    this.data.history.push(play);
    localStorage.setItem("saved-state", JSON.stringify(this.data.history));
  },
  whoWin(myPlay: string, computerPlay: string) {
    let resultado = "";
    if (myPlay == computerPlay) {
      resultado = "empate";
    } else if (myPlay == "piedra") {
      if (computerPlay == "tijera") {
        resultado = "ganaste";
      } else {
        resultado = "perdiste";
      }
    } else if (myPlay == "papel") {
      if (computerPlay == "piedra") {
        resultado = "ganaste";
      } else {
        resultado = "perdiste";
      }
    } else if (myPlay == "tijera") {
      if (computerPlay == "papel") {
        resultado = "ganaste";
      } else {
        resultado = "perdiste";
      }
    }
    return resultado;
  },
  score() {
    const history = this.getState().history;
    const respuesta = {
      score: {
        computerPlay: 0,
        myPlay: 0,
      },
    };
    for (const r of history) {
      const win = this.whoWin(r.myPlay, r.computerPlay);
      if (win == "ganaste") {
        respuesta.score.myPlay++;
      } else if (win == "perdiste") {
        respuesta.score.computerPlay++;
      }
    }
    return respuesta;
  },
};
export { state };
