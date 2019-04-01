import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaYesNoComponent } from './criteria-yes-no.component';

describe('CriteriaYesNoComponent', () => {
  let component: CriteriaYesNoComponent;
  let fixture: ComponentFixture<CriteriaYesNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaYesNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
