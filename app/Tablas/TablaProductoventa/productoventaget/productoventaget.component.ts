import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductoventaService } from 'src/app/Servicios/ServicioProductoventa/productoventa.service';

@Component({
  selector: 'app-productoventaget',
  templateUrl: './productoventaget.component.html',
  styleUrls: ['./productoventaget.component.css']
})
export class ProductoventagetComponent implements OnInit {

  produventa: any;

  constructor(private productoventa:ProductoventaService,private router:Router) { }

  ngOnInit(): void {
    this.productoventa.getProductoventa().subscribe(dato =>{
      this.produventa = dato;
    })

  } 

  EditarProductoventa(id = []){
    this.router.navigate(['productoventaEditar', id]);
    }
 
    EliminarProductoventa(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      this.productoventa.eliminarProductoventa(id).subscribe(dato =>{
      this.produventa.splice(iControl,1);
      this.router.navigateByUrl('/productoventa');

      })

      }

}
