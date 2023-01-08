import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/Servicios/ServicioEmpleado/empleado.service';

@Component({
  selector: 'app-empleadoput',
  templateUrl: './empleadoput.component.html',
  styleUrls: ['./empleadoput.component.css']
})
export class EmpleadoputComponent implements OnInit {

  FormEmpleado: FormGroup;
  Idemple: any;

  constructor(public formulario: FormBuilder, private empleado:EmpleadoService,private router:Router, private active:ActivatedRoute){
    this.Idemple = this.active.snapshot.paramMap.get('id');
    this.empleado.getId(this.Idemple).subscribe(dato =>{
      console.log(dato);
      this.FormEmpleado.setValue({
        Id: dato[0]['Id'],
        Usuario: dato[0]['Usuario'],
        Password_empleado: dato[0]['Password_empleado'],
        Nombre_1: dato[0]['Nombre_1'],
        Nombre_2: dato[0]['Nombre_2'],
        Apellido_paterno: dato[0]['Apellido_paterno'],
        Apellido_materno: dato[0]['Apellido_materno'],
        Numero_telefono: dato[0]['Numero_telefono'],
        Direccion: dato[0]['Direccion'],
        Curp: dato[0]['Curp'],
        RFC: dato[0]['RFC'],
        
      }
      );
    } 
    );
    this.FormEmpleado=this.formulario.group({
    Id: [''],
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

put():any{
console.log(this.Idemple);
console.log(this.FormEmpleado.value);
this.empleado.editarEmpleados(this.Idemple, this.FormEmpleado.value).subscribe(datos => {
  this.router.navigateByUrl('/empleado');

});

}


}
