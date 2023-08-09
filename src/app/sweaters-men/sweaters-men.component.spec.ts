import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweatersMenComponent } from './sweaters-men.component';

describe('SweatersMenComponent', () => {
  let component: SweatersMenComponent;
  let fixture: ComponentFixture<SweatersMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweatersMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweatersMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
