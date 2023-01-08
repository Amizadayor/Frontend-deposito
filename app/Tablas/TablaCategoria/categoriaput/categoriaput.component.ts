import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/Servicios/ServicioCategoria/categoria.service';

@Component({
  selector: 'app-categoriaput',
  templateUrl: './categoriaput.component.html',
  styleUrls: ['./categoriaput.component.css']
})
export class CategoriaputComponent implements OnInit {

  FormCategoria: FormGroup;
  Idcatego: any;

  constructor(public formulario: FormBuilder, private categoria:CategoriaService,private router:Router, private active:ActivatedRoute){
    this.Idcatego = this.active.snapshot.paramMap.get('id');
    this.categoria.getId(this.Idcatego).subscribe(dato =>{
      console.log(dato);
      this.FormCategoria.setValue({
        Id: dato[0]['Id'],
        Nombre_categoria: dato[0]['Nombre_categoria'],
        Capacidad_producto: dato[0]['Capacidad_producto'],
        
      }
      );
    } 
    );
    this.FormCategoria=this.formulario.group({
    Id: [''],
    Nombre_categoria: [''],
    Capacidad_producto: [''],
    
      });
  }

  ngOnInit(): void {}

put():any{
console.log(this.Idcatego);
console.log(this.FormCategoria.value);
this.categoria.editarCategoria(this.Idcatego, this.FormCategoria.value).subscribe(datos => {
  this.router.navigateByUrl('/categoria');

});

}

}
