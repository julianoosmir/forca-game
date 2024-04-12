import { Component } from '@angular/core';
import { ForcaService } from '../core/forca.service';
import { Forca } from '../models/forca';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forca-cadastro',
  templateUrl: './forca-cadastro.component.html',
  styleUrls: ['./forca-cadastro.component.css']
})
export class ForcaCadastroComponent {

  id?: number;
  dica?= '';
  palavra = '';
  constructor(private forcaService: ForcaService,
    private location: Location, private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.verificarState();
  }

  verificarState() {
    if (this.location.getState()) {
      this.dica = this.getForca(this.location.getState()).dica;
      this.palavra = this.getPalavra(this.location.getState());
      this.id = this.getForca(this.location.getState()).id
    }
  }


  verificarPalvra(palavra: string) {
    if (this.getCount(palavra) > 1) {
      this.showSnackbarTopPosition("apenas uma palavra pode ser cadastrada", '', 3000)
      return false;
    }
    return true;
  }

  salvar() {
    const forca = new Forca;
    forca.dica = this.dica;
    forca.palavra = this.palavra;
    if (this.verificarPalvra(forca.palavra)) {
      this.salvarForca(forca);
    }
  }

  salvarForca(forca: Forca) {
    if (this.id) {
      forca.id = this.id;
      this.forcaService.alterar(forca).subscribe(() => {
        this.showSnackbarTopPosition("salvo com sucesso", '', 3000)
      });

    } else {
      this.forcaService.salvar(forca).subscribe(() => {
        this.showSnackbarTopPosition("salvo com sucesso", '', 3000)
      });
    }
  }

  getCount(str: string) {
    return str.split(' ').filter((num) => {
      return num != ''
    }).length;
  }


  getForca(state: any): Forca {
    return state.forca;
  }
  getPalavra(state: any): string | any {
    return this.getForca(state).palavra;
  }
  showSnackbarTopPosition(content: string, action: string | undefined, duration: any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
}
