import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShipmentInformationComponent } from './edit-shipment-information.component';

describe('EditShipmentInformationComponent', () => {
  let component: EditShipmentInformationComponent;
  let fixture: ComponentFixture<EditShipmentInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShipmentInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShipmentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
