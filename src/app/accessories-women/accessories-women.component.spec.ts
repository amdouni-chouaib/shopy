import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesWomenComponent } from './accessories-women.component';

describe('AccessoriesWomenComponent', () => {
  let component: AccessoriesWomenComponent;
  let fixture: ComponentFixture<AccessoriesWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
