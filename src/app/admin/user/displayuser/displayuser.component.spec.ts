import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayuserComponent } from './displayuser.component';

describe('DisplayuserComponent', () => {
  let component: DisplayuserComponent;
  let fixture: ComponentFixture<DisplayuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
