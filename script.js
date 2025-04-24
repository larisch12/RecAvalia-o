class personagem{
    constructor( vida, força, mana){
        this.vida = vida,
        this.força = força,
        this.mana = mana
    }
}
class Guerreiro extends personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
    }
    atacar() {
        console.log(atacando)
    }
    defender() {
        console.log(defendendo)
    }
    usarMagia() {
        console.log(usandoMagia)
    }
}
class  Mago extends personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
    }
    atacar() {
        console.log(atacando)
    }
    defender() {
        console.log(defendendo)
    }
    usarMagia() {
        console.log(usandoMagia)
    }
}
class Arqueiro extends personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
    }
    atacar() {
        console.log(atacando)
    }
    defender() {
        console.log(defendendo)
    }
    usarMagia() {
        console.log(usandoMagia)
    }
}
const Personagem = new personagem (100, 50, 50)
