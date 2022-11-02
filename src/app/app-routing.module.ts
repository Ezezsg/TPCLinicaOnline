import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { AltaAdminComponent } from './page/alta-admin/alta-admin.component';
import { ListaUsuariosComponent } from './page/lista-usuarios/lista-usuarios.component';



const routes: Routes = [
  { path : 'bienvenido', component: BienvenidosComponent},
  { path: '', pathMatch:'full', redirectTo: 'bienvenido'},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { 
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'altaAdmin', component: AltaAdminComponent, canActivate: [AuthGuard] },
      { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'models', loadChildren: () => import('./models/models.module').then(m => m.ModelsModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
