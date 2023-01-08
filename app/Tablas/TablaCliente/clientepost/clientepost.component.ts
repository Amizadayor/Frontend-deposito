import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/Servicios/ServicioCliente/cliente.service';

@Component({
  selector: 'app-clientepost',
  templateUrl: './clientepost.component.html',
  styleUrls: ['./clientepost.component.css']
})
export class ClientepostComponent implements OnInit {

  FormCliente:FormGroup;

  constructor(public formulario:FormBuilder, private cliente:ClienteService,private router:Router) { 

  this.FormCliente=this.formulario.group({
    Nombre_1: [''],
    Nombre_2: [''],
    Apellido_paterno: [''],
    Apellido_materno: [''],
    Numero_telefono: [''],
    Direccion: [''],
    Fecha_nacimiento: [''],
    
    });
  }
   
  ngOnInit(): void {}
 

ingresarClien(): any{
console.log(this.FormCliente.value);
this.cliente.agregarClientes(this.FormCliente.value).subscribe();
this.router.navigateByUrl('/cliente');
}

}
