import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForcaComponent } from './forca/forca.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RoleGuardServiceService } from './core/role-guard-service.service';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ForcaCadastroComponent } from './forca-cadastro/forca-cadastro.component';
import { PerfilsComponent } from './perfils/perfils.component';
import { ForcaGameComponent } from './forca-game/forca-game.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forcas', component: ForcaComponent },
  {
    path: 'usuarios', component: UsuariosComponent,
    canActivate: [RoleGuardServiceService], data: {
      role: ['ADMIN', 'USER']
    }
  },
  {
    path: 'cadastro-forca', component: ForcaCadastroComponent,
    canActivate: [RoleGuardServiceService], data: {
      role: ['ADMIN']
    }
  },
  {
    path: 'jogo-forca', component: ForcaGameComponent,
    canActivate: [RoleGuardServiceService], data: {
      role: ['ADMIN','PLAYER']
    }
  },
  {
    path: 'cadastro-usuario', component: CadastroUsuarioComponent,
    canActivate: [RoleGuardServiceService], data: {
      role: ['ADMIN']
    }
  },
  {
    path:'perfils', component: PerfilsComponent,
    canActivate:[RoleGuardServiceService], data:{
      role: ['ADMIN']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
