import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtsWomenComponent } from './shirts-women.component';

describe('ShirtsWomenComponent', () => {
  let component: ShirtsWomenComponent;
  let fixture: ComponentFixture<ShirtsWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirtsWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShirtsWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
