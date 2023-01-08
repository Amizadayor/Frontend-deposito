import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ClienteputComponent } from './Tablas/TablaCliente/clienteput/clienteput.component';
import { EmpleadoputComponent } from './Tablas/TablaEmpleado/empleadoput/empleadoput.component';
import { ProductoputComponent } from './Tablas/TablaProducto/productoput/productoput.component';
import { ProductoventaputComponent } from './Tablas/TablaProductoventa/productoventaput/productoventaput.component';
import { ProveedorputComponent } from './Tablas/TablaProveedor/proveedorput/proveedorput.component';
import { VentaputComponent } from './Tablas/TablaVenta/ventaput/ventaput.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CategoriamostrarComponent,
    PrincipalComponent,
    CategoriapostComponent,
    ProveedorgetComponent,
    ProveedorpostComponent,
    ProductogetComponent,
    ProductopostComponent,
    EmpleadogetComponent,
    EmpleadopostComponent,
    ClientegetComponent,
    ClientepostComponent,
    VentagetComponent,
    VentapostComponent,
    ProductoventagetComponent,
    ProductoventapostComponent,
    CategoriaputComponent,
    ClienteputComponent,
    EmpleadoputComponent,
    ProductoputComponent,
    ProductoventaputComponent,
    ProveedorputComponent,
    VentaputComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
