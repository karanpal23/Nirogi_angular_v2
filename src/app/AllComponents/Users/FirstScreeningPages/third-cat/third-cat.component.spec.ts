import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCatComponent } from './third-cat.component';

describe('ThirdCatComponent', () => {
  let component: ThirdCatComponent;
  let fixture: ComponentFixture<ThirdCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
