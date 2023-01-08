import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/Servicios/ServicioEmpleado/empleado.service';

@Component({
  selector: 'app-empleadopost',
  templateUrl: './empleadopost.component.html',
  styleUrls: ['./empleadopost.component.css']
})
export class EmpleadopostComponent implements OnInit {

  FormEmpleado:FormGroup;

  constructor(public formulario:FormBuilder, private empleado:EmpleadoService,private router:Router) { 

    this.FormEmpleado=this.formulario.group({
      Usuario: [''],
      Password_empleado: [''],
      Nombre_1: [''],
      Nombre_2: [''],
      Apellido_paterno: [''], 
      Apellido_materno: [''],
      Numero_telefono: [''],
      Direccion: [''],
      Curp: [''],
      RFC: [''],
      
      });
    }
   
    ngOnInit(): void {}
  
  
  ingresarEmple(): any{
  console.log(this.FormEmpleado.value);
  this.empleado.agregarEmpleados(this.FormEmpleado.value).subscribe();
  this.router.navigateByUrl('/empleado');
  }
}
