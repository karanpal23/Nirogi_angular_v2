import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSixthCatogComponent } from './view-sixth-catog.component';

describe('ViewSixthCatogComponent', () => {
  let component: ViewSixthCatogComponent;
  let fixture: ComponentFixture<ViewSixthCatogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSixthCatogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSixthCatogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
