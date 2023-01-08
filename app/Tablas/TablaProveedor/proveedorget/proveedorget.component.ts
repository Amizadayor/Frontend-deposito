import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/Servicios/ServicioProveedor/proveedor.service';

@Component({
  selector: 'app-proveedorget',
  templateUrl: './proveedorget.component.html',
  styleUrls: ['./proveedorget.component.css']
})
export class ProveedorgetComponent implements OnInit {

  provee: any;

  constructor(private proveedor:ProveedorService,private router:Router) { }

  ngOnInit(): void {
    this.proveedor.getProveedor().subscribe(dato =>{
      this.provee = dato;
    })
  }

  EditarProveedor(id = []){
    this.router.navigate(['proveedorEditar', id]);
    }
 
    EliminarProveedor(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      this.proveedor.eliminarProveedor(id).subscribe(dato =>{
      this.provee.splice(iControl,1);
      this.router.navigateByUrl('/proveedor');

      })

      }

}
