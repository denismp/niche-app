import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCriteriaYesNoComponent } from './edit-criteria-yes-no.component';

describe('EditCriteriaYesNoComponent', () => {
  let component: EditCriteriaYesNoComponent;
  let fixture: ComponentFixture<EditCriteriaYesNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCriteriaYesNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCriteriaYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
