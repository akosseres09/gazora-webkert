import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGasComponent } from './main-gas.component';

describe('MainGasComponent', () => {
  let component: MainGasComponent;
  let fixture: ComponentFixture<MainGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainGasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
