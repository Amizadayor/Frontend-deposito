import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from 'src/app/Interfaces/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  url:string = "http://localhost/apideposito/API/";

  constructor(private http:HttpClient) { }

  getVenta():Observable<Venta[]>{
    let direccion = this.url+"ventas.php?listado" ;
    return this.http.get<Venta[]>(direccion);
  }

  getId(id: any):Observable<any>{
    let direccion = this.url+"ventas.php?id="+id;
    return this.http.get<any>(direccion);
  }

  editarVenta(id: any ,put: Venta):Observable<any>{
    let direccion = this.url+"ventas.php?editar="+ id;
    return this.http.put<any>(direccion, put)
  }

  agregarVenta(post: Venta):Observable<any>{
    let direccion = this.url+"ventas.php?agregar";
    return this.http.post<any>(direccion, post)
  }

  eliminarVenta(id:any):Observable<any>{
    let direccion = this.url+"ventas.php?eliminar"+ id;
    return this.http.delete<any>(direccion);
  }

}
