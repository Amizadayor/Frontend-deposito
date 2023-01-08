import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriamostrarComponent } from './Tablas/TablaCategoria/categoriamostrar/categoriamostrar.component';
import { PrincipalComponent } from './Tablas/principal/principal.component';
import { CategoriapostComponent } from './Tablas/TablaCategoria/categoriapost/categoriapost.component';
import { ProveedorgetComponent } from './Tablas/TablaProveedor/proveedorget/proveedorget.component';
import { ProveedorpostComponent } from './Tablas/TablaProveedor/proveedorpost/proveedorpost.component';
import { ProductogetComponent } from './Tablas/TablaProducto/productoget/productoget.component';
import { ProductopostComponent } from './Tablas/TablaProducto/productopost/productopost.component';
import { EmpleadogetComponent } from './Tablas/TablaEmpleado/empleadoget/empleadoget.component';
import { EmpleadopostComponent } from './Tablas/TablaEmpleado/empleadopost/empleadopost.component';
import { ClientegetComponent } from './Tablas/TablaCliente/clienteget/clienteget.component';
import { ClientepostComponent } from './Tablas/TablaCliente/clientepost/clientepost.component';
import { VentagetComponent } from './Tablas/TablaVenta/ventaget/ventaget.component';
import { VentapostComponent } from './Tablas/TablaVenta/ventapost/ventapost.component';
import { ProductoventagetComponent } from './Tablas/TablaProductoventa/productoventaget/productoventaget.component';
import { ProductoventapostComponent } from './Tablas/TablaProductoventa/productoventapost/productoventapost.component';
import { CategoriaputComponent } from './Tablas/TablaCategoria/categoriaput/categoriaput.component';
import { ProveedorputComponent } from './Tablas/TablaProveedor/proveedorput/proveedorput.component';
import { ProductoputComponent } from './Tablas/TablaProducto/productoput/productoput.component';
import { EmpleadoputComponent } from './Tablas/TablaEmpleado/empleadoput/empleadoput.component';
import { ClienteputComponent } from './Tablas/TablaCliente/clienteput/clienteput.component';
import { VentaputComponent } from './Tablas/TablaVenta/ventaput/ventaput.component';
import { ProductoventaputComponent } from './Tablas/TablaProductoventa/productoventaput/productoventaput.component';



const routes: Routes = [

  { path:'', redirectTo:'principal', pathMatch:'full'},

  { path:'principal', component:PrincipalComponent},
  
  { path:'categoria', component:CategoriamostrarComponent },
  { path:'categoriaAgregar', component:CategoriapostComponent},
  { path:'categoriaEditar/:id', component:CategoriaputComponent},

  {path:'proveedor', component:ProveedorgetComponent},
  {path:'proveedorAgregar', component:ProveedorpostComponent},
  {path:'proveedorEditar/:id', component:ProveedorputComponent},

  {path:'producto', component:ProductogetComponent},
  {path:'productoAgregar', component:ProductopostComponent},
  {path:'productoEditar/:id', component:ProductoputComponent},

  {path:'empleado', component:EmpleadogetComponent},
  {path:'empleadoAgregar', component:EmpleadopostComponent},
  {path:'empleadoEditar/:id', component:EmpleadoputComponent},

  {path:'cliente', component:ClientegetComponent},
  {path:'clienteAgregar', component:ClientepostComponent},
  {path:'clienteEditar/:id', component:ClienteputComponent},

  {path:'venta', component:VentagetComponent},
  {path:'ventaAgregar', component:VentapostComponent},
  {path:'ventaEditar/:id', component:VentaputComponent},

  {path:'productoventa', component:ProductoventagetComponent},
  {path:'productoventaAgregar', component:ProductoventapostComponent},
  {path:'productoventaEditar/:id', component:ProductoventaputComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CategoriamostrarComponent]
