import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { AltaAdminComponent } from './page/alta-admin/alta-admin.component';
import { ListaUsuariosComponent } from './page/lista-usuarios/lista-usuarios.component';
import { MiperfilComponent } from './page/miperfil/miperfil.component';
import { VerificacionCuentaComponent } from './componentes/verificacion-cuenta/verificacion-cuenta.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { SolicitarTurnoComponent } from './componentes/solicitar-turno/solicitar-turno.component';
import { HorariosComponent } from './componentes/horarios/horarios.component';
import { TurnosListComponent } from './componentes/turnos-list/turnos-list.component';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { SacarTurnoComponent } from './componentes/sacar-turno/sacar-turno.component';



const routes: Routes = [
  { path : 'bienvenido', component: BienvenidosComponent},
  { path: '', pathMatch:'full', redirectTo: 'bienvenido'},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'verificacion', component: VerificacionCuentaComponent },
  { 
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: '', component: InicioComponent, canActivate: [AuthGuard] },
      { path: 'altaAdmin', component: AltaAdminComponent, canActivate: [AuthGuard] },
      { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [AuthGuard] },
      { path: 'miperfil', component: MiperfilComponent, canActivate: [AuthGuard] },
      { path: 'sacarTurno', component: SacarTurnoComponent, canActivate: [AuthGuard] },
      { path: 'solicitarTurno', component: SolicitarTurnoComponent, canActivate: [AuthGuard] },
      { path: 'horarios', component: HorariosComponent, canActivate: [AuthGuard] },
      { path: 'listadoTurnos', component: TurnosListComponent, canActivate: [AuthGuard] },
      { path: 'pacientes', component: PacientesComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'models', loadChildren: () => import('./models/models.module').then(m => m.ModelsModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
