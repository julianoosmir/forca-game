import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcaGameComponent } from './forca-game.component';

describe('ForcaGameComponent', () => {
  let component: ForcaGameComponent;
  let fixture: ComponentFixture<ForcaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForcaGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForcaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
