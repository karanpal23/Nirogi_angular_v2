import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCatComponent } from './first-cat.component';

describe('FirstCatComponent', () => {
  let component: FirstCatComponent;
  let fixture: ComponentFixture<FirstCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
