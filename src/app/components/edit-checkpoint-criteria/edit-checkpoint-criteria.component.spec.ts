import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCheckpointCriteriaComponent } from './edit-checkpoint-criteria.component';

describe('EditCheckpointCriteriaComponent', () => {
  let component: EditCheckpointCriteriaComponent;
  let fixture: ComponentFixture<EditCheckpointCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCheckpointCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCheckpointCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
