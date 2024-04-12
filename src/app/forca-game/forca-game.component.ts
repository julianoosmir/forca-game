
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Forca } from '../models/forca';

@Component({
  selector: 'app-forca-game',
  templateUrl: './forca-game.component.html',
  styleUrls: ['./forca-game.component.css']
})
export class ForcaGameComponent implements OnInit {
  rota = 'assets/img/';
  foto = 'forca.png';
  imagem = this.rota + this.foto;
  tentativas = 6;
  palavraSecreta = '';
  letrasOculta: string[] = [];
  dica: string | undefined = '';
  vitoria: boolean | undefined;
  constructor(
    private location: Location,
    private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.dica = this.getForca(this.location.getState()).dica;
    this.palavraSecreta = this.getPalavra(this.location.getState());
    this.montarPalavraNaTela();
  }

  getForca(state: any): Forca {
    return state.forca;
  }
  getPalavra(state: any): string | any {
    return this.getForca(state).palavra;
  }


  showSnackbarTopPosition(content: string, action: string | undefined, duration: any): void {
    this.snackBar.open(content, action, {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

  verificaLetraEscolhida(tag: any) {
    tag.disabled = true;

    if (this.tentativas > 0) {
      this.mudarStyleLetra(tag, true);
      this.comparaLetras(tag);
    }

  }
  mudarStyleLetra(tag: any, troca: boolean) {
    if (troca) {
      tag.style.background = 'red';
      tag.style.color = "#ffffff";
    }
    else {
      tag.style.background = "#008000";
      tag.style.color = "#ffffff";
    }
  }
  comparaLetras(tag: any) {
    const letra: string = tag.innerHTML
    this.palavraSecreta = this.palavraSecreta?.toUpperCase();
    const pos = this.palavraSecreta?.indexOf(letra);
    if (pos < 0) {
      this.errou();
    }
    else {
      this.acertou(letra, tag);
    }
  }
  errou() {
    this.tentativas--
    this.carregaImagemForca();
    if (this.tentativas == 0) {
      this.showSnackbarTopPosition("OPS!" + "Não foi dessa vez ... A palavra secreta era " + this.palavraSecreta, '', 50000);
    }
  }
  acertou(letra: string, tag: any) {
    this.mudarStyleLetra(tag, false);
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      if (this.palavraSecreta[i] == letra) {
        this.letrasOculta[i] = letra;
      }
    }
    this.checarVitoria();
  }
  checarVitoria() {
    this.vitoria = true;
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      if (this.palavraSecreta[i] != this.letrasOculta[i]) {
        this.vitoria = false;
      }
    }

    if (this.vitoria) {
      this.showSnackbarTopPosition("PARABÉNS! Você venceu...", '', 3000);
      this.tentativas = 0;
    }
  }


  carregaImagemForca() {
    this.foto = 'forca0' + (6 - this.tentativas) + '.png';
    this.imagem = this.rota + this.foto;
  }

  montarPalavraNaTela() {
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      this.letrasOculta[i] = "";
    }
  }
  getWordCount(str: string) {
    return str.split(' ')
      .filter((n) => { return n != '' }).length;
  }
}
