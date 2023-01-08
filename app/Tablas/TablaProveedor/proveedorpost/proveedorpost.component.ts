import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/Servicios/ServicioProveedor/proveedor.service';

@Component({
  selector: 'app-proveedorpost',
  templateUrl: './proveedorpost.component.html',
  styleUrls: ['./proveedorpost.component.css']
})
export class ProveedorpostComponent implements OnInit {

  FormProveedor:FormGroup;

  constructor(public formulario:FormBuilder, private proveedor:ProveedorService,private router:Router) { 

    this.FormProveedor=this.formulario.group({
      Nombre_1: [''],
      Nombre_2: [''],
      Apellido_paterno: [''], 
      Apellido_materno: [''],
      Numero_telefono: [''],
      Empresa: [''],
      
      });
    }
   
    ngOnInit(): void {}
  
  
  ingresarProvee(): any{
  console.log(this.FormProveedor.value);
  this.proveedor.agregarProveedor(this.FormProveedor.value).subscribe();
  this.router.navigateByUrl('/proveedor');
  }

}
