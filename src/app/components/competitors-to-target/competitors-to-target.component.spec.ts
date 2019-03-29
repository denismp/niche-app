import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorsToTargetComponent } from './competitors-to-target.component';

describe('CompetitorsToTargetComponent', () => {
  let component: CompetitorsToTargetComponent;
  let fixture: ComponentFixture<CompetitorsToTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorsToTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorsToTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
