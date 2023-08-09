import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayproductComponent } from './displayproduct.component';

describe('DisplayproductComponent', () => {
  let component: DisplayproductComponent;
  let fixture: ComponentFixture<DisplayproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
