import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubcategoriesComponent } from './addsubcategories.component';

describe('AddsubcategoriesComponent', () => {
  let component: AddsubcategoriesComponent;
  let fixture: ComponentFixture<AddsubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsubcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
