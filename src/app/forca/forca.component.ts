import { Component } from '@angular/core';
import { Forca } from '../models/forca';
import { ForcaService } from '../core/forca.service';
import { AuthenticationService } from '../core/auth.service';

@Component({
  selector: 'app-forca',
  templateUrl: './forca.component.html',
  styleUrl: './forca.component.css'
})
export class ForcaComponent {
  forcas : Forca[] = []
  role = '';


  constructor(private forcaService: ForcaService,private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.getForca();
    this.role = this.getRole();
  }

  getForca() {
    this.forcaService
      .listar()
      .subscribe((forcas: Forca[]) =>
        this.forcas.push(...forcas)
      );
  }
  getRole(){
    return this.authenticationService.getRole();
  }

  deletar(id?:number){
    this.forcaService.delete(id).subscribe(() =>{
        this.forcas = this.forcas.filter(forca => forca.id != id);

    })
  }

}
