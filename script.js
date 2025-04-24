class personagem{
    constructor( vida, força, mana){
        this.vida = vida,
        this.força = força,
        this.mana = mana
    }
}
class Guerreiro extends personagem{

}
class  Mago extends personagem{

}
class Arqueiro extends personagem{
    
}
const Personagem = new personagem (100, 50, 50)