import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthCatComponent } from './sixth-cat.component';

describe('SixthCatComponent', () => {
  let component: SixthCatComponent;
  let fixture: ComponentFixture<SixthCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SixthCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixthCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
