import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthCatComponent } from './fifth-cat.component';

describe('FifthCatComponent', () => {
  let component: FifthCatComponent;
  let fixture: ComponentFixture<FifthCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FifthCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FifthCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
