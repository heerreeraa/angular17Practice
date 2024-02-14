import { Route } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ProductosComponent } from './productos/productos.component';

export default [
    { 
     path: '',
     component: PrincipalComponent
    },
    { 
     path: 'dashboard',
     component: EmpleadosComponent
    },
    { 
     path: 'dashboard',
     component: ProductosComponent
    }
] as Route[];
