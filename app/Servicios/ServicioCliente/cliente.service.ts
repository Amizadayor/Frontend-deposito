import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string = "http://localhost/apideposito/API/";

  constructor(private http:HttpClient) { }

  getClientes():Observable<Cliente[]>{
    let direccion = this.url+"clientes.php?listado" ;
    return this.http.get<Cliente[]>(direccion);
  }

  getId(id: any):Observable<any>{
    let direccion = this.url+"clientes.php?id="+id;
    return this.http.get<any>(direccion);
  }

  editarClientes(id: any ,put: Cliente):Observable<any>{
    let direccion = this.url+"clientes.php?editar="+ id;
    return this.http.put<any>(direccion, put)
  }

  agregarClientes(post: Cliente):Observable<any>{
    let direccion = this.url+"clientes.php?agregar";
    return this.http.post<any>(direccion, post)
  }

  eliminarClientes(id:any):Observable<any>{
    let direccion = this.url+"clientes.php?eliminar"+ id;
    return this.http.delete<any>(direccion);
  }

}
