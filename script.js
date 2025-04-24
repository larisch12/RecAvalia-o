
class Personagem {
    #vida
    #força
    #mana

    constructor(vida, força, mana) {
        this.#vida = vida
        this.#força = força
        this.#mana = mana
    }

    get vida() {
        return this.#vida
    }

    set vida(valor) {
        this.#vida = valor
    }

    get força() {
        return this.#força
    }

    set força(valor) {
        this.#força = valor
    }

    get mana() {
        return this.#mana
    }

    set mana(valor) {
        this.#mana = valor
    }
}

class Guerreiro extends Personagem {
    atacar() {
        console.log("O guerreiro usa um golpe poderoso com a espada")
    }

    defender() {
        console.log("O guerreiro ergue seu escudo")
    }

    usarMagia() {
        console.log("O guerreiro não usa magia...")
    }
}

class Mago extends Personagem {
    atacar() {
        console.log("O mago lança uma bola de fogo mágica")
    }

    defender() {
        console.log("O mago conjura um escudo mágico")
    }

    usarMagia() {
        console.log("O mago utiliza um feitiço")
    }
}

class Arqueiro extends Personagem {
    atacar() {
        console.log("O arqueiro dispara uma flecha")
    }

    defender() {
        console.log("O arqueiro desvia")
    }

    usarMagia() {
        console.log("O arqueiro usa uma flecha magica")
    }
}

const guerreiro = new Guerreiro(30, 80, 20)
const mago = new Mago(60, 40, 90)
const arqueiro = new Arqueiro(60, 30, 40)

guerreiro.atacar()
mago.atacar()
arqueiro.atacar()














