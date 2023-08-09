import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycategoriesComponent } from './displaycategories.component';

describe('DisplaycategoriesComponent', () => {
  let component: DisplaycategoriesComponent;
  let fixture: ComponentFixture<DisplaycategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
