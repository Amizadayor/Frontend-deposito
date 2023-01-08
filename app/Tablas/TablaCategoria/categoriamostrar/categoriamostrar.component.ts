import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/Servicios/ServicioCategoria/categoria.service';

@Component({
  selector: 'app-categoriamostrar',
  templateUrl: './categoriamostrar.component.html',
  styleUrls: ['./categoriamostrar.component.css']
})
export class CategoriamostrarComponent implements OnInit {

  catego: any;

  constructor(private categoria:CategoriaService,private router:Router) { }

  ngOnInit(): void {
    this.categoria.getCategoria().subscribe(dato =>{
      this.catego = dato;
    })
  }

  EditarCategoria(id = []){
    this.router.navigate(['categoriaEditar', id]);
    }
 
    EliminarCategoria(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      this.categoria.eliminarCategoria(id).subscribe(dato =>{
      this.catego.splice(iControl,1);
      this.router.navigateByUrl('/categoria');

      })

      }
  

}   
