import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcaCadastroComponent } from './forca-cadastro.component';

describe('ForcaCadastroComponent', () => {
  let component: ForcaCadastroComponent;
  let fixture: ComponentFixture<ForcaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForcaCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForcaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
