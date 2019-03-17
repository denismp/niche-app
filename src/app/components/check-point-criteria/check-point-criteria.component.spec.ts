import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPointCriteriaComponent } from './check-point-criteria.component';

describe('CheckPointCriteriaComponent', () => {
  let component: CheckPointCriteriaComponent;
  let fixture: ComponentFixture<CheckPointCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPointCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPointCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
