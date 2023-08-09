import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtsMenComponent } from './shirts-men.component';

describe('ShirtsMenComponent', () => {
  let component: ShirtsMenComponent;
  let fixture: ComponentFixture<ShirtsMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirtsMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShirtsMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
