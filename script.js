
class Personagem {
    constructor(vida, força, mana) {
        this.vida = vida
        this.força = força
        this.mana = mana
    }
}

class Guerreiro extends Personagem {
    constructor(vida, força, mana) {
        super(vida, força, mana)
    }
    atacar() {
        console.log("O guerreiro da um golpe com a espada")
    }
    defender() {
        console.log("O guerreiro ergue seu escudo para defender")
    }
    usarMagia() {
        console.log("O guerreiro não usa magia muito bem... ")
    }
}

class Mago extends Personagem {
    constructor(vida, força, mana) {
        super(vida, força, mana)
    }
    atacar() {
        console.log("O mago lança uma bola de fogo mágica")
    }
    defender() {
        console.log("O mago conjura um escudo mágico para se proteger")
    }
    usarMagia() {
        console.log("O mago utiliza um feitiço para atacar")
    }
}

class Arqueiro extends Personagem {
    constructor(vida, força, mana) {
        super(vida, força, mana)
    }
    atacar() {
        console.log("O arqueiro dispara uma flecha ")
    }
    defender() {
        cosole.log("O arqueiro esquiva para evitar o ataque")
    }
    usarMagia() {
        console.log("O arqueiro tenta usar uma magia com sua flecha.")
    }
}

const guerreiro = new Guerreiro(30, 80, 20)
const mago = new Mago(60, 40, 90)
const arqueiro = new Arqueiro(60, 30, 40)

guerreiro.atacar()
mago.atacar()
arqueiro.atacar()
