import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThirdCatogComponent } from './view-third-catog.component';

describe('ViewThirdCatogComponent', () => {
  let component: ViewThirdCatogComponent;
  let fixture: ComponentFixture<ViewThirdCatogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewThirdCatogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewThirdCatogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
