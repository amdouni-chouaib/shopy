import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecategoriesComponent } from './updatecategories.component';

describe('UpdatecategoriesComponent', () => {
  let component: UpdatecategoriesComponent;
  let fixture: ComponentFixture<UpdatecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
