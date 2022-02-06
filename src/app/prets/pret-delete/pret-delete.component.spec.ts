import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretDeleteComponent } from './pret-delete.component';

describe('PretDeleteComponent', () => {
  let component: PretDeleteComponent;
  let fixture: ComponentFixture<PretDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PretDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
