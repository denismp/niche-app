import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOurCompanyComponent } from './edit-our-company.component';

describe('EditOurCompanyComponent', () => {
  let component: EditOurCompanyComponent;
  let fixture: ComponentFixture<EditOurCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOurCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOurCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
