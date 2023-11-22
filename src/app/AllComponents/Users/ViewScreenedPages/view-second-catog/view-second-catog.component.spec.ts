import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecondCatogComponent } from './view-second-catog.component';

describe('ViewSecondCatogComponent', () => {
  let component: ViewSecondCatogComponent;
  let fixture: ComponentFixture<ViewSecondCatogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSecondCatogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSecondCatogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
