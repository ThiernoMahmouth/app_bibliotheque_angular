import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreOneComponent } from './livre-one.component';

describe('LivreOneComponent', () => {
  let component: LivreOneComponent;
  let fixture: ComponentFixture<LivreOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
