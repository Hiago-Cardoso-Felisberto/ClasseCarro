class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC(){
        return this.peso/(this.altura*this.altura);
    }

    classificarIMC(){
        let imc = this.calculoIMC();
        switch(true){
            case imc<18.5 :
                return ("abaixo do peso");
            
                case imc>= 18.5 && imc<25 :
                return ("no peso normal");

                case imc>= 25 && imc<30 :
                return ("acima do Peso");

                case imc>= 30 && imc<40 :
                return ("Obeso");

                case imc>= 40 :
                return ("Obesidade Grave");

                default : return;
        }
    }

    descreverIMC(){
        console.log(`O ${this.nome}, tem ${this.altura} m, e ${this.peso} kg, e seu IMC é: ${this.calculoIMC().toFixed(2)}, e se encontra ${this.classificarIMC()}`)
    }
    
}

const Jose = new pessoa("José", 150, 1.60);
const Joao = new pessoa("João", 70, 1.80);
Jose.descreverIMC();
Joao.descreverIMC();