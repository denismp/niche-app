import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAsinComponent } from './parent-asin.component';

describe('ParentAsinComponent', () => {
  let component: ParentAsinComponent;
  let fixture: ComponentFixture<ParentAsinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAsinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
