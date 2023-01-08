import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/Servicios/ServicioVenta/venta.service';

@Component({
  selector: 'app-ventapost',
  templateUrl: './ventapost.component.html',
  styleUrls: ['./ventapost.component.css']
})
export class VentapostComponent implements OnInit {
  
  FormVenta:FormGroup;

  constructor(public formulario:FormBuilder, private venta:VentaService,private router:Router) { 

  this.FormVenta=this.formulario.group({
    Total_final: [''],
    Cantidad_producto_final: [''],
    Fecha_venta: [''],
    Cliente_id: [''],  
    Empleado_id: [''],  
       
    });
  }
  
  ngOnInit(): void {}
  

ingresarVenta(): any{
console.log(this.FormVenta.value);
this.venta.agregarVenta(this.FormVenta.value).subscribe();
this.router.navigateByUrl('/venta');
}

}
