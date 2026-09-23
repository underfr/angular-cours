import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomUserApi } from './random-user-api';

describe('RandomUserApi', () => {
  let component: RandomUserApi;
  let fixture: ComponentFixture<RandomUserApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomUserApi],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomUserApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
