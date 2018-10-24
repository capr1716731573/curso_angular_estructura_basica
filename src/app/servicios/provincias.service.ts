import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  provincias:any=["AZUAY", "BOLIVAR", "CAÑAR", "CARCHI", "COTOPAXI", "CHIMBORAZO", "EL ORO", "GUAYAS", "IMBABURA", "LOJA", "LOS RIOS", "MANABI", "MORONA SANTIAGO", "NAPO", "PASTAZA", "PICHINCHA", "TUNGURAHUA", "ZAMORA CHINCHIPE", "GALAPAGOS", "SUCUMBIOS", "ORELLANA", "SANTO DOMINGO DE LOS TSACHILAS", "SANTA ELENA", "ZONA NO DELIMITADA", "ESMERALDAS", "PRV NO IDENTIFICADO", "SIN PROVINCIA"];
  constructor() { }

  getProvincias(){
    return this.provincias;
  }
}
