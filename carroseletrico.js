class CarroEletrico extends Carro{
    constructor(marca,modelo,ano,capacidadedeBateria){
        super(marca,modelo,ano);
        this.capacidadedeBateria = capacidadedeBateria;
    }
    imprimirdetalhe(){
        return
        `
        marca:${this.marca}
        modelo:${this.modelo}
        ano:${this.ano}
        capacidade de bateria:${this.capacidadedeBateria} KWh
        `
    }
}