import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthCatComponent } from './fourth-cat.component';

describe('FourthCatComponent', () => {
  let component: FourthCatComponent;
  let fixture: ComponentFixture<FourthCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FourthCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
