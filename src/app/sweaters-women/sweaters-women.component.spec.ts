import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweatersWomenComponent } from './sweaters-women.component';

describe('SweatersWomenComponent', () => {
  let component: SweatersWomenComponent;
  let fixture: ComponentFixture<SweatersWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweatersWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweatersWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
