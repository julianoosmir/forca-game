
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../core/auth.service';
import { PerfilService } from '../core/perfil.service';
import { Perfil } from '../models/Perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfils.component.html',
  styleUrls: ['./perfils.component.css']
})
export class PerfilsComponent {

  role = '';
  perfils: Perfil[] = [];
  nome = '';

  constructor(private perfilService: PerfilService, private authenticationService: AuthenticationService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getPerfils();
    this.role = this.getRole();
  }

  getPerfils() {
    return this.perfilService.getPerfils().subscribe((perfils: Perfil[]) => {
      this.perfils = perfils;
    })
  }
  getRole() {
    return this.authenticationService.getRole();
  }

  salvar() {
    if (this.nome !== '' && this.nome !== null && this.nome !== undefined) {
      this.perfilService.salvar(this.nome.toUpperCase()).subscribe(() => {
        this.showSnackbarTopPosition("salvo com sucesso", '', 3000)
        this.getPerfils();
      });
    }

  }

  showSnackbarTopPosition(content: string, action: string | undefined, duration: any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

  deletar(id: number) {
    this.perfilService.delete(id).subscribe(() => {
      this.showSnackbarTopPosition("salvo com sucesso", '', 3000)
      this.getPerfils();
    });
  }

}
