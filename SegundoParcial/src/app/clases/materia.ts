import { Usuario } from "../clases/usuario";
export class Materia {
    public nombre:string;
    public cuatrimestre:string;
    public cupos:number;
    public nombreProfesor:string;
    
    public listaInscriptos: Array<any> = Array<any>();

    constructor(nombre:string,cuatrimestre:string,cupos:number,nombreProfesor:string){
        this.nombre = nombre;
        this.cuatrimestre = cuatrimestre;
        this.cupos = cupos;
        this.nombreProfesor = nombreProfesor;
        this.listaInscriptos.push("");
        let envioNota = {
            nota : "seis"
        }
        this.listaInscriptos.push(envioNota);


    }
    
}
