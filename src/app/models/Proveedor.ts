export class Proveedor{
    constructor(public nombre:string,
    public cif:string,
    public direccion:string,
    public cp:string,
    public localidad:string,
    public provincia:string,
    public telefono:string,
    public email:string,
    public contacto:string,
    ){
       console.log('Proveedor incializado');

   }
}