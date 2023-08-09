import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesMenComponent } from './accessories-men.component';

describe('AccessoriesMenComponent', () => {
  let component: AccessoriesMenComponent;
  let fixture: ComponentFixture<AccessoriesMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
