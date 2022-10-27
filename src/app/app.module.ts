import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import { environment } from '../environments/environment';

import { AuthenticateService } from './servicios/authenticate.service';

import { NoLogeadoGuard } from './guards/no-logeado.guard';
import { LogeadoGuard } from './guards/logeado.guard';

import { HomeComponent } from './page/home/home.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { PrincipalComponent } from './page/principal/principal.component';
import { CapchaComponent } from './componentes/capcha/capcha.component';
import { AltaAdminComponent } from './page/alta-admin/alta-admin.component';
import { AltaHorariosComponent } from './componentes/alta-horarios/alta-horarios.component';
import { ListadosComponent } from './page/listados/listados.component';
import { TablaUsuariosComponent } from './componentes/tabla-usuarios/tabla-usuarios.component';
import { PerfilComponent } from './page/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent,
    CapchaComponent,
    AltaAdminComponent,
    AltaHorariosComponent,
    ListadosComponent,
    TablaUsuariosComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthenticateService, LogeadoGuard, NoLogeadoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
