import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { PrincipalComponent } from './page/principal/principal.component';
import { NoLogeadoGuard } from './guards/no-logeado.guard';
import { LogeadoGuard } from './guards/logeado.guard';
import { AltaAdminComponent } from './page/alta-admin/alta-admin.component';
import { ListadosComponent } from './page/listados/listados.component';
import { PerfilComponent } from './page/perfil/perfil.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[NoLogeadoGuard]},
  { path: 'Principal', component: PrincipalComponent, canActivate: [LogeadoGuard], },
  { path: 'Login', component: LoginComponent, canActivate:[NoLogeadoGuard]},
  { path: 'Registro', component: RegistroComponent, canActivate:[NoLogeadoGuard]},
  { path: 'Alta-Admin', component: AltaAdminComponent, canActivate: [LogeadoGuard] },
  { path: 'Listados', component: ListadosComponent, canActivate: [LogeadoGuard] },
  { path: 'Perfil', component: PerfilComponent, canActivate: [LogeadoGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
