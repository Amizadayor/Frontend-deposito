import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/Servicios/ServicioVenta/venta.service';

@Component({
  selector: 'app-ventaget',
  templateUrl: './ventaget.component.html',
  styleUrls: ['./ventaget.component.css']
})
export class VentagetComponent implements OnInit {

  
  vent: any;

  constructor(private venta:VentaService,private router:Router) { }

  ngOnInit(): void {
    this.venta.getVenta().subscribe(dato =>{
      this.vent = dato;
    })

  } 

  EditarVenta(id = []){
    this.router.navigate(['ventaEditar', id]);
    }
 
    EliminarVenta(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      this.venta.eliminarVenta(id).subscribe(dato =>{
      this.vent.splice(iControl,1);
      this.router.navigateByUrl('/venta');

      })

      }

}
