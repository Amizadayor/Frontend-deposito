import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VentaService } from 'src/app/Servicios/ServicioVenta/venta.service';

@Component({
  selector: 'app-ventaput',
  templateUrl: './ventaput.component.html',
  styleUrls: ['./ventaput.component.css']
})
export class VentaputComponent implements OnInit {

 
  FormVenta: FormGroup;
  Idven: any;

  constructor(public formulario: FormBuilder, private venta:VentaService,private router:Router, private active:ActivatedRoute){
    this.Idven = this.active.snapshot.paramMap.get('id');
    this.venta.getId(this.Idven).subscribe(dato =>{
      console.log(dato);
      this.FormVenta.setValue({
        Id: dato[0]['Id'],
        Total_final: dato[0]['Total_final'],
        Cantidad_producto_final: dato[0]['Cantidad_producto_final'],
        Fecha_venta: dato[0]['Fecha_venta'],
        Cliente_id: dato[0]['Cliente_id'],
        Empleado_id: dato[0]['Empleado_id'],
                
      }
      );
    } 
    );
    this.FormVenta=this.formulario.group({
    Id: [''],
    Total_final: [''],
    Cantidad_producto_final: [''],
    Fecha_venta: [''],
    Cliente_id: [''],
    Empleado_id: [''],
   
    });
  }

  ngOnInit(): void {}

put():any{
console.log(this.Idven);
console.log(this.FormVenta.value);
this.venta.editarVenta(this.Idven, this.FormVenta.value).subscribe(datos => {
  this.router.navigateByUrl('/venta');

});

}

}
