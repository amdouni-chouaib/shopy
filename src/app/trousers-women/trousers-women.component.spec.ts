import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrousersWomenComponent } from './trousers-women.component';


describe('TrousersWomenComponent', () => {
  let component: TrousersWomenComponent;
  let fixture: ComponentFixture<TrousersWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrousersWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrousersWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
