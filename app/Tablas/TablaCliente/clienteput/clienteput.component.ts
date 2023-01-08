import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/Servicios/ServicioCliente/cliente.service';

@Component({
  selector: 'app-clienteput',
  templateUrl: './clienteput.component.html',
  styleUrls: ['./clienteput.component.css']
})
export class ClienteputComponent implements OnInit {
  
  FormCliente: FormGroup;
  Idclien: any;

  constructor(public formulario: FormBuilder, private cliente:ClienteService,private router:Router, private active:ActivatedRoute){
    this.Idclien = this.active.snapshot.paramMap.get('id');
    this.cliente.getId(this.Idclien).subscribe(dato =>{
      console.log(dato);
      this.FormCliente.setValue({
        Id: dato[0]['Id'],
        Nombre_1: dato[0]['Nombre_1'],
        Nombre_2: dato[0]['Nombre_2'],
        Apellido_paterno: dato[0]['Apellido_paterno'],
        Apellido_materno: dato[0]['Apellido_materno'],
        Numero_telefono: dato[0]['Numero_telefono'],
        Direccion: dato[0]['Direccion'],
        Fecha_nacimiento: dato[0]['Fecha_nacimiento'],
        
      }
      );
    } 
    );
    this.FormCliente=this.formulario.group({
    Id: [''],
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

put():any{
console.log(this.Idclien);
console.log(this.FormCliente.value);
this.cliente.editarClientes(this.Idclien, this.FormCliente.value).subscribe(datos => {
  this.router.navigateByUrl('/cliente');

});

}


}
