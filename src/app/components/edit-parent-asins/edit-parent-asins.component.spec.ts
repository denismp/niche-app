import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParentAsinsComponent } from './edit-parent-asins.component';

describe('EditParentAsinsComponent', () => {
  let component: EditParentAsinsComponent;
  let fixture: ComponentFixture<EditParentAsinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditParentAsinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParentAsinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
