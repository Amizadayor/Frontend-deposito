import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoventaService } from 'src/app/Servicios/ServicioProductoventa/productoventa.service';

@Component({
  selector: 'app-productoventaput',
  templateUrl: './productoventaput.component.html',
  styleUrls: ['./productoventaput.component.css']
})
export class ProductoventaputComponent implements OnInit {

 
  FormProductoventa: FormGroup;
  Idproduven: any;

  constructor(public formulario: FormBuilder, private productoventa:ProductoventaService,private router:Router, private active:ActivatedRoute){
    this.Idproduven = this.active.snapshot.paramMap.get('id');
    this.productoventa.getId(this.Idproduven).subscribe(dato =>{
      console.log(dato);
      this.FormProductoventa.setValue({
        Id: dato[0]['Id'],
        Total_venta: dato[0]['Total_venta'],
        Cantidad_producto_vendido: dato[0]['Cantidad_producto_vendido'],
        Producto_id: dato[0]['Producto_id'],
        Venta_id: dato[0]['Venta_id'],
       
        
        
      }
      );
    } 
    );
    this.FormProductoventa=this.formulario.group({
    Id: [''],
    Total_venta: [''],
    Cantidad_producto_vendido: [''],
    Producto_id: [''],
    Venta_id: [''],
    
      });
  }

  ngOnInit(): void {}

put():any{
console.log(this.Idproduven);
console.log(this.FormProductoventa.value);
this.productoventa.editarProductoventa(this.Idproduven, this.FormProductoventa.value).subscribe(datos => {
  this.router.navigateByUrl('/productoventa');

});

}


}
