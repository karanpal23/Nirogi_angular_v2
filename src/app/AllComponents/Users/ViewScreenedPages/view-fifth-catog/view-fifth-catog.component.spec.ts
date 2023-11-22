import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFifthCatogComponent } from './view-fifth-catog.component';

describe('ViewFifthCatogComponent', () => {
  let component: ViewFifthCatogComponent;
  let fixture: ComponentFixture<ViewFifthCatogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewFifthCatogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFifthCatogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
