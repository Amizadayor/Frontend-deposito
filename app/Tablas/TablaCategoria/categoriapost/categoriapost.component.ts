import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/Servicios/ServicioCategoria/categoria.service';

@Component({
  selector: 'app-categoriapost',
  templateUrl: './categoriapost.component.html',
  styleUrls: ['./categoriapost.component.css']
})
export class CategoriapostComponent implements OnInit {
  
  FormCategoria:FormGroup;

  constructor(public formulario:FormBuilder, private categoria:CategoriaService,private router:Router){
    
    this.FormCategoria=this.formulario.group({
    Nombre_categoria: [''],
    Capacidad_producto: [''],
    });
  }

  ngOnInit(): void {}


ingresarCatego(): any{
console.log(this.FormCategoria.value);
this.categoria.agregarCategoria(this.FormCategoria.value).subscribe();
this.router.navigateByUrl('/categoria');
}
 
}
 