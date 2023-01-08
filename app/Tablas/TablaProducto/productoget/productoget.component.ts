import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Servicios/ServicioProducto/producto.service';

@Component({
  selector: 'app-productoget',
  templateUrl: './productoget.component.html',
  styleUrls: ['./productoget.component.css']
})
export class ProductogetComponent implements OnInit {

  produ: any;

  constructor(private producto:ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.producto.getProductos().subscribe(dato =>{
      this.produ = dato;
    }) 
  }

  EditarProducto(id = []){
    this.router.navigate(['productoEditar', id]);
    }
 
    EliminarProducto(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      this.producto.eliminarProductos(id).subscribe(dato =>{
      this.produ.splice(iControl,1);
      this.router.navigateByUrl('/producto');

      })

      }

}
