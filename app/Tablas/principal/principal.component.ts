import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  categoria(){
    this.router.navigate(['categoriamostrar']);
  }

  cliente(){
    this.router.navigate(['clienteget']);
  }
  empleado(){
    this.router.navigate(['empleadoget']);
  }
  producto(){
    this.router.navigate(['productoget']);
  }
  productoventa(){
    this.router.navigate(['productoventaget']);
  }
  proveedor(){
    this.router.navigate(['proveedorget']);
  }
  venta(){
    this.router.navigate(['ventaget']);
  }

}
