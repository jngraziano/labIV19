export class Materia {
    public nombre:string;
    public cuatrimestre:string;
    public cupos:number;
    public nombreProfesor:string;

    constructor(nombre:string,cuatrimestre:string,cupos:number,nombreProfesor:string){
        this.nombre = nombre;
        this.cuatrimestre = cuatrimestre;
        this.cupos = cupos;
        this.nombreProfesor = nombreProfesor;

    }
    
}
