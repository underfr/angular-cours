import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationFormulaire } from './validation-formulaire';

describe('ValidationFormulaire', () => {
  let component: ValidationFormulaire;
  let fixture: ComponentFixture<ValidationFormulaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationFormulaire],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationFormulaire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
