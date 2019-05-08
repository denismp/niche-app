import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetitorsToTargetComponent } from './edit-competitors-to-target.component';

describe('EditCompetitorsToTargetComponent', () => {
  let component: EditCompetitorsToTargetComponent;
  let fixture: ComponentFixture<EditCompetitorsToTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompetitorsToTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompetitorsToTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
