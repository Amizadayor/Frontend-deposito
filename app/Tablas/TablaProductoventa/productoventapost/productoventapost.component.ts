import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoventaService } from 'src/app/Servicios/ServicioProductoventa/productoventa.service';

@Component({
  selector: 'app-productoventapost',
  templateUrl: './productoventapost.component.html',
  styleUrls: ['./productoventapost.component.css']
})
export class ProductoventapostComponent implements OnInit {
  
  FormProductoventa:FormGroup;

  constructor(public formulario:FormBuilder, private productoventa:ProductoventaService,private router:Router) { 

  this.FormProductoventa=this.formulario.group({
    Total_venta: [''],
    Cantidad_producto_vendido: [''],
    Producto_id: [''],
    Venta_id: [''],  
       
    });
  }
  
  ngOnInit(): void {}
  

ingresarProduven(): any{
console.log(this.FormProductoventa.value);
this.productoventa.agregarProductoventa(this.FormProductoventa.value).subscribe();
this.router.navigateByUrl('/productoventa');
}

}
