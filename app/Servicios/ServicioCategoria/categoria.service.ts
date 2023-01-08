import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/Interfaces/Categoria';

 
@Injectable({
  providedIn: 'root'
})
export class CategoriaService { 

  url:string = "http://localhost/apideposito/API/";

  constructor(private http:HttpClient) { }

  
  getCategoria():Observable<Categoria[]>{
    let direccion = this.url+"categorias.php?listado" ;
    return this.http.get<Categoria[]>(direccion);
  }

  getId(id: any):Observable<any>{
    let direccion = this.url+"categorias.php?id="+id;
    return this.http.get<any>(direccion);
  }

  editarCategoria(id: any ,put: Categoria):Observable<any>{
    let direccion = this.url+"categorias.php?editar";
    return this.http.put<any>(direccion, put)
  }

  agregarCategoria(post: Categoria):Observable<any>{
    let direccion = this.url+"categorias.php?agregar";
    return this.http.post<any>(direccion, post)
  }

  eliminarCategoria(id:any):Observable<any>{
    let direccion = this.url+"categorias.php?eliminar"+id;
    return this.http.delete<any>(direccion);
  }



}
