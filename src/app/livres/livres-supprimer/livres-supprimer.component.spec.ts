import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresSupprimerComponent } from './livres-supprimer.component';

describe('LivresSupprimerComponent', () => {
  let component: LivresSupprimerComponent;
  let fixture: ComponentFixture<LivresSupprimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresSupprimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
