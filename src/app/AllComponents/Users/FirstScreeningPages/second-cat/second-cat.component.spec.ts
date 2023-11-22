import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCatComponent } from './second-cat.component';

describe('SecondCatComponent', () => {
  let component: SecondCatComponent;
  let fixture: ComponentFixture<SecondCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
