import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/Servicios/ServicioEmpleado/empleado.service';

@Component({
  selector: 'app-empleadoget',
  templateUrl: './empleadoget.component.html',
  styleUrls: ['./empleadoget.component.css']
})
export class EmpleadogetComponent implements OnInit {

  emple: any;

  constructor(private empleado:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
    this.empleado.getEmpleados().subscribe(dato =>{
      this.emple = dato;
    })
  }


  EditarEmpleado(id = []){
    this.router.navigate(['empleadoEditar', id]);
    }
 
    EliminarEmpleado(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      this.empleado.eliminarEmpleados(id).subscribe(dato =>{
      this.emple.splice(iControl,1);
      this.router.navigateByUrl('/empleado');

      })

      }

}
 