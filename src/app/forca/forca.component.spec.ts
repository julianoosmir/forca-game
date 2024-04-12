import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcaComponent } from './forca.component';

describe('ForcaComponent', () => {
  let component: ForcaComponent;
  let fixture: ComponentFixture<ForcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
