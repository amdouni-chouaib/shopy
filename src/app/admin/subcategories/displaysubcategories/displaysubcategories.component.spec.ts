import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysubcategoriesComponent } from './displaysubcategories.component';

describe('DisplaysubcategoriesComponent', () => {
  let component: DisplaysubcategoriesComponent;
  let fixture: ComponentFixture<DisplaysubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaysubcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaysubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
