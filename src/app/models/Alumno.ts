export class Alumno{
    public id:number;
    public nombres:string;
    public apellidos:string;
    public ciudad:string;

    constructor (id:number,nombres:string,apellidos:string, ciudad:string){
        this.id=id;
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.ciudad=ciudad;
    }
}