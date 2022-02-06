import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresModifierComponent } from './livres-modifier.component';

describe('LivresModifierComponent', () => {
  let component: LivresModifierComponent;
  let fixture: ComponentFixture<LivresModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
