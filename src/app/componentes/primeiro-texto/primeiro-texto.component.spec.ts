import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroTextoComponent } from './primeiro-texto.component';

describe('PrimeiroTextoComponent', () => {
  let component: PrimeiroTextoComponent;
  let fixture: ComponentFixture<PrimeiroTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
