import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatsMenComponent } from './coats-men.component';

describe('CoatsMenComponent', () => {
  let component: CoatsMenComponent;
  let fixture: ComponentFixture<CoatsMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoatsMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoatsMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
