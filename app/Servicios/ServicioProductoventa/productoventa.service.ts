import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productoventa } from 'src/app/Interfaces/Productoventa';

@Injectable({
  providedIn: 'root'
})
export class ProductoventaService {

  url:string = "http://localhost/apideposito/API/";


  constructor(private http:HttpClient) { }

  getProductoventa():Observable<Productoventa[]>{
    let direccion = this.url+"productoventas.php?listado" ;
    return this.http.get<Productoventa[]>(direccion);
  }

  getId(id: any):Observable<any>{
    let direccion = this.url+"productoventas.php?id="+id;
    return this.http.get<any>(direccion);
  }

  editarProductoventa(id: any ,put: Productoventa):Observable<any>{
    let direccion = this.url+"productoventas.php?editar="+ id;
    return this.http.put<any>(direccion, put)
  }

  agregarProductoventa(post: Productoventa):Observable<any>{
    let direccion = this.url+"productoventas.php?agregar";
    return this.http.post<any>(direccion, post)
  }

  eliminarProductoventa(id:any):Observable<any>{
    let direccion = this.url+"productoventas.php?eliminar"+ id;
    return this.http.delete<any>(direccion);
  }


}
