import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts'; 

//Material
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

//Firebase
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

import { NgxCaptchaModule } from 'ngx-captcha';
import { RecaptchaModule } from 'ng-recaptcha'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './page/home/home.component';
import { CapchaComponent } from './componentes/capcha/capcha.component';
import { AltaAdminComponent } from './page/alta-admin/alta-admin.component';

import * as firebase from 'firebase';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NavComponent } from './componentes/nav/nav.component';
import { MiperfilComponent } from './page/miperfil/miperfil.component';
import { ListaUsuariosComponent } from './page/lista-usuarios/lista-usuarios.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { VerificacionCuentaComponent } from './componentes/verificacion-cuenta/verificacion-cuenta.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { SolicitarTurnoComponent } from './componentes/solicitar-turno/solicitar-turno.component';
import { ListaProfesionalesComponent } from './componentes/lista-profesionales/lista-profesionales.component';
import { ListaFechaHoraComponent } from './componentes/lista-fecha-hora/lista-fecha-hora.component';
import { ConfirmarTurnoComponent } from './componentes/confirmar-turno/confirmar-turno.component';
import { HorariosComponent } from './componentes/horarios/horarios.component';
import { TurnosListComponent } from './componentes/turnos-list/turnos-list.component';
import { ModalTurnoComponent } from './componentes/modal-turno/modal-turno.component';
import { ModalTurnoDetalleComponent } from './componentes/modal-turno-detalle/modal-turno-detalle.component';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { ListaPacientesComponent } from './componentes/lista-pacientes/lista-pacientes.component';
import { TurnosListPacientesComponent } from './componentes/turnos-list-pacientes/turnos-list-pacientes.component';
import { CalificacionPipe } from './pipes/calificacion.pipe';
import { EstadoTurnoPipe } from './pipes/estado-turno.pipe';
import { FechaPipe } from './pipes/fecha.pipe';
import { MesesPipe } from './pipes/meses.pipe';
import { SacarTurnoComponent } from './componentes/sacar-turno/sacar-turno.component';
import { ListaEspecialidadesComponent } from './componentes/lista-especialidades/lista-especialidades.component';
import { SortTurnosPipe } from './pipes/sort-turnos.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ListaMedicosComponent } from './componentes/lista-medicos/lista-medicos.component';
import { LogListComponent } from './componentes/log-list/log-list.component';
import { TurnoDetalleComponent } from './componentes/turno-detalle/turno-detalle.component';
import { EstadisticasComponent } from './page/estadisticas/estadisticas.component';
import { GraficosColumnaComponent } from './componentes/graficos-columna/graficos-columna.component';
import { GraficosDiasComponent } from './componentes/graficos-dias/graficos-dias.component';
import { GraficosTurnosSolicitadosComponent } from './componentes/graficos-turnos-solicitados/graficos-turnos-solicitados.component';
import { GraficosTurnosFinalizadosComponent } from './componentes/graficos-turnos-finalizados/graficos-turnos-finalizados.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CapchaComponent,
    AltaAdminComponent,
    BienvenidosComponent,
    NavComponent,
    MiperfilComponent,
    ListaUsuariosComponent,
    ListaComponent,
    PaginatePipe,
    VerificacionCuentaComponent,
    InicioComponent,
    SolicitarTurnoComponent,
    ListaProfesionalesComponent,
    ListaFechaHoraComponent,
    ConfirmarTurnoComponent,
    HorariosComponent,
    TurnosListComponent,
    ModalTurnoComponent,
    ModalTurnoDetalleComponent,
    BusquedaPipe,
    PacientesComponent,
    ListaPacientesComponent,
    TurnosListPacientesComponent,
    CalificacionPipe,
    EstadoTurnoPipe,
    FechaPipe,
    MesesPipe,
    SacarTurnoComponent,
    ListaEspecialidadesComponent,
    SortTurnosPipe,
    FiltroPipe,
    ListaMedicosComponent,
    LogListComponent,
    TurnoDetalleComponent,
    EstadisticasComponent,
    GraficosColumnaComponent,
    GraficosDiasComponent,
    GraficosTurnosSolicitadosComponent,
    GraficosTurnosFinalizadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatExpansionModule,
    MatPaginatorModule,
    FormsModule, 
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    BrowserAnimationsModule,
    ChartModule,
    NgxCaptchaModule,
    RecaptchaModule,
    ToastrModule.forRoot(),
    AngularFireStorageModule,
    MatButtonToggleModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireStorage,
    AngularFirestore,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
