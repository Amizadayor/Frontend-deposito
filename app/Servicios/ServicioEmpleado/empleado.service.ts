import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/Interfaces/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url:string = "http://localhost/apideposito/API/";

  constructor(private http:HttpClient) { }

  getEmpleados():Observable<Empleado[]>{
    let direccion = this.url+"empleados.php?listado" ;
    return this.http.get<Empleado[]>(direccion);
  }

  getId(id: any):Observable<any>{
    let direccion = this.url+"empleados.php?id="+id;
    return this.http.get<any>(direccion);
  }

  editarEmpleados(id: any ,put: Empleado):Observable<any>{
    let direccion = this.url+"empleados.php?editar="+ id;
    return this.http.put<any>(direccion, put)
  }

  agregarEmpleados(post: Empleado):Observable<any>{
    let direccion = this.url+"empleados.php?agregar";
    return this.http.post<any>(direccion, post)
  }

  eliminarEmpleados(id:any):Observable<any>{
    let direccion = this.url+"empleados.php?eliminar"+ id;
    return this.http.delete<any>(direccion);
  }

}
