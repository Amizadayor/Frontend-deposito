import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/Servicios/ServicioCliente/cliente.service';

@Component({
  selector: 'app-clienteget',
  templateUrl: './clienteget.component.html',
  styleUrls: ['./clienteget.component.css']
})
export class ClientegetComponent implements OnInit {

  clien: any;

  constructor(private cliente:ClienteService,private router:Router) { }

  ngOnInit(): void {
    this.cliente.getClientes().subscribe(dato =>{
      this.clien = dato;
    })

  }

  EditarCliente(id = []){
    this.router.navigate(['clienteEditar', id]);
    }
 
    EliminarCliente(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      this.cliente.eliminarClientes(id).subscribe(dato =>{
      this.clien.splice(iControl,1);
      this.router.navigateByUrl('/cliente');

      })

      }
 
}
