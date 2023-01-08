import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Servicios/ServicioProducto/producto.service';

@Component({
  selector: 'app-productopost',
  templateUrl: './productopost.component.html',
  styleUrls: ['./productopost.component.css']
})
export class ProductopostComponent implements OnInit {

  FormProducto:FormGroup;

  constructor(public formulario:FormBuilder, private producto:ProductoService,private router:Router) { 

  this.FormProducto=this.formulario.group({
    Nombre_producto: [''],
    Precio_producto: [''],
    Stock: [''],
    Categoria_id: [''],
    Proveedor_id: [''],
        
    });
  }
  
  ngOnInit(): void {}


ingresarProdu(): any{
console.log(this.FormProducto.value);
this.producto.agregarProductos(this.FormProducto.value).subscribe();
this.router.navigateByUrl('/producto');
}
}
