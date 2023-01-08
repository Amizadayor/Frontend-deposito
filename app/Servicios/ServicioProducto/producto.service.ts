import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/Interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string = "http://localhost/apideposito/API/";


  constructor(private http:HttpClient) { }

  getProductos():Observable<Producto[]>{
    let direccion = this.url+"productos.php?listado" ;
    return this.http.get<Producto[]>(direccion);
  }

  getId(id: any):Observable<any>{
    let direccion = this.url+"productos.php?id="+id;
    return this.http.get<any>(direccion);
  }

  editarProductos(id: any ,put: Producto):Observable<any>{
    let direccion = this.url+"productos.php?editar="+ id;
    return this.http.put<any>(direccion, put)
  }

  agregarProductos(post: Producto):Observable<any>{
    let direccion = this.url+"productos.php?agregar";
    return this.http.post<any>(direccion, post)
  }

  eliminarProductos(id:any):Observable<any>{
    let direccion = this.url+"productos.php?eliminar"+ id;
    return this.http.delete<any>(direccion);
  }

}
