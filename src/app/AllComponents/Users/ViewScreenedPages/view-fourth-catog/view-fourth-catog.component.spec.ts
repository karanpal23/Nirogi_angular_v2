import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFourthCatogComponent } from './view-fourth-catog.component';

describe('ViewFourthCatogComponent', () => {
  let component: ViewFourthCatogComponent;
  let fixture: ComponentFixture<ViewFourthCatogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewFourthCatogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFourthCatogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
