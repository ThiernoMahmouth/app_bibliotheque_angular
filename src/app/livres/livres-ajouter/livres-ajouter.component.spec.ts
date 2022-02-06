import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresAjouterComponent } from './livres-ajouter.component';

describe('LivresAjouterComponent', () => {
  let component: LivresAjouterComponent;
  let fixture: ComponentFixture<LivresAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresAjouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
