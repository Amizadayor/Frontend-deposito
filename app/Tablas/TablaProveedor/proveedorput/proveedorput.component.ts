import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from 'src/app/Servicios/ServicioProveedor/proveedor.service';

@Component({
  selector: 'app-proveedorput',
  templateUrl: './proveedorput.component.html',
  styleUrls: ['./proveedorput.component.css']
})
export class ProveedorputComponent implements OnInit {

   
  FormProveedor: FormGroup;
  Idprovee: any;

  constructor(public formulario: FormBuilder, private proveedor:ProveedorService,private router:Router, private active:ActivatedRoute){
    this.Idprovee = this.active.snapshot.paramMap.get('id');
    this.proveedor.getId(this.Idprovee).subscribe(dato =>{
      console.log(dato);
      this.FormProveedor.setValue({
        Id: dato[0]['Id'],
        Nombre_1: dato[0]['Nombre_1'],
        Nombre_2: dato[0]['Nombre_2'],
        Apellido_paterno: dato[0]['Apellido_paterno'],
        Apellido_materno: dato[0]['Apellido_materno'],
        Numero_telefono: dato[0]['Numero_telefono'],
        Empresa: dato[0]['Empresa'],
                
      }
      );
    } 
    );
    this.FormProveedor=this.formulario.group({
    Id: [''],
    Nombre_1: [''],
    Nombre_2: [''],
    Apellido_paterno: [''],
    Apellido_materno: [''],
    Numero_telefono: [''],
    Empresa: [''],

      });
  }

  ngOnInit(): void {}

put():any{
console.log(this.Idprovee);
console.log(this.FormProveedor.value);
this.proveedor.editarProveedor(this.Idprovee, this.FormProveedor.value).subscribe(datos => {
  this.router.navigateByUrl('/proveedor');

});

}
}
