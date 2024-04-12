import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BasicSnackBarComponent } from './basic-snack-bar/basic-snack-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient,withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CookieService } from 'ngx-cookie-service';
import { ForcaComponent } from './forca/forca.component';
import { MenuComponent } from './menu/menu.component';
import { TokenInterceptor } from './core/token.interceptor';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TableModule } from 'primeng/table';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ForcaCadastroComponent } from './forca-cadastro/forca-cadastro.component';
import { PerfilsComponent } from './perfils/perfils.component';
import { ForcaGameComponent } from './forca-game/forca-game.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasicSnackBarComponent,
    ForcaComponent,
    MenuComponent,
    UsuariosComponent,
    CadastroUsuarioComponent,
    ForcaCadastroComponent,
    PerfilsComponent,
    ForcaGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSnackBarModule,
    InputTextModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
