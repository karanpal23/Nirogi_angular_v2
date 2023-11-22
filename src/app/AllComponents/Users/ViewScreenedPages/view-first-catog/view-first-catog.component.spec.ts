import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFirstCatogComponent } from './view-first-catog.component';

describe('ViewFirstCatogComponent', () => {
  let component: ViewFirstCatogComponent;
  let fixture: ComponentFixture<ViewFirstCatogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewFirstCatogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFirstCatogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
