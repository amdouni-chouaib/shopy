import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrousersMenComponent } from './trousers-men.component';

describe('TrousersMenComponent', () => {
  let component: TrousersMenComponent;
  let fixture: ComponentFixture<TrousersMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrousersMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrousersMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
