import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatsWomenComponent } from './coats-women.component';

describe('CoatsWomenComponent', () => {
  let component: CoatsWomenComponent;
  let fixture: ComponentFixture<CoatsWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoatsWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoatsWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
