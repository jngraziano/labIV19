export class Producto {

    id: number;
    descripcion: string;
    tipo: string;
    fechaDeVencimiento: string;
    precio: number;
    rutaDeFoto: string;

    constructor(){
        this.id = 1;
        this.descripcion = "Desc";
        this.tipo = "soli";
        this.fechaDeVencimiento="20.202.2"
        this.precio= 222;
    }
    
}
