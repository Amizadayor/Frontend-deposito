import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/Servicios/ServicioProducto/producto.service';

@Component({
  selector: 'app-productoput',
  templateUrl: './productoput.component.html',
  styleUrls: ['./productoput.component.css']
})
export class ProductoputComponent implements OnInit {

  
  FormProducto: FormGroup;
  Idproduc: any;

  constructor(public formulario: FormBuilder, private producto:ProductoService,private router:Router, private active:ActivatedRoute){
    this.Idproduc = this.active.snapshot.paramMap.get('id');
    this.producto.getId(this.Idproduc).subscribe(dato =>{
      console.log(dato);
      this.FormProducto.setValue({
        Id: dato[0]['Id'],
        Nombre_producto: dato[0]['Nombre_producto'],
        Precio_producto: dato[0]['Precio_producto'],
        Stock: dato[0]['Stock'],
        Categoria_id: dato[0]['Categoria_id'],
        Proveedor_id: dato[0]['Proveedor_id'],
        
        
      }
      );
    } 
    );
    this.FormProducto=this.formulario.group({
    Id: [''],
    Nombre_producto: [''],
    Precio_producto: [''],
    Stock: [''],
    Categoria_id: [''],
    Proveedor_id: [''],

      });
  }

  ngOnInit(): void {}

put():any{
console.log(this.Idproduc);
console.log(this.FormProducto.value);
this.producto.editarProductos(this.Idproduc, this.FormProducto.value).subscribe(datos => {
  this.router.navigateByUrl('/producto');

});

}

}
