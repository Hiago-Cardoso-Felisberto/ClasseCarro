class carro{
    marca;
    cor;
    gastoPorKM;

    constructor(marca, cor, gastoPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKM = gastoPorKM;
    }
    gasto(KM, precoCombustivel){
        
       let gastoGasolina = KM*this.gastoPorKM*precoCombustivel;
       console.log(`O carro da marca ${this.marca}, faz ${this.gastoPorKM.toFixed(2)} por km,
       e gasta R$${gastoGasolina.toFixed(2)} para rodar ${KM} km`);
    }
}

const Uno = new carro("Fiat", "Roxo", 1/12);
Uno.gasto(500, 5.15);
const Palio = new carro("Fiat", "Roxo", 1/14);
Palio.gasto(500, 5.15);