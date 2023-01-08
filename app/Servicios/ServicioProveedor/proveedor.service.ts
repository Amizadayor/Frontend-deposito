import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/Interfaces/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url:string = "http://localhost/apideposito/API/";

  constructor(private http:HttpClient) { }

  getProveedor():Observable<Proveedor[]>{
    let direccion = this.url+"proveedores.php?listado" ;
    return this.http.get<Proveedor[]>(direccion);
  }

  getId(id: any):Observable<any>{
    let direccion = this.url+"proveedores.php?id="+id;
    return this.http.get<any>(direccion);
  }

  editarProveedor(id: any ,put: Proveedor):Observable<any>{
    let direccion = this.url+"proveedores.php?editar="+ id;
    return this.http.put<any>(direccion, put)
  }

  agregarProveedor(post: Proveedor):Observable<any>{
    let direccion = this.url+"proveedores.php?agregar";
    return this.http.post<any>(direccion, post)
  }

  eliminarProveedor(id:any):Observable<any>{
    let direccion = this.url+"proveedores.php?eliminar"+ id;
    return this.http.delete<any>(direccion);
  }




}
