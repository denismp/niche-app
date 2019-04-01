import { Component, OnInit, Input } from '@angular/core';
import { ShipmentInfo } from 'src/app/models/shipment-info.model';
import { ShipmentInfoStore } from 'src/app/stores/shipment-info-store';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-shipment-info',
  templateUrl: './shipment-info.component.html',
  styleUrls: ['./shipment-info.component.css']
})
export class ShipmentInfoComponent implements OnInit {

  shipmentInfos: ShipmentInfo[];

  originalId: number;
  selectedShipmentInfo: ShipmentInfo = {
    id: null,
    fnsku: '',
    sku: '',
    shipmentDate: null,
    skuAssignedDate: null,
    products: null,
    createdBy: '',
    createdDate: null,
    updatedBy: '',
    updatedDate: null
  };
  // export interface ShipmentInfo {
//   id: number;
//   fnsku: string;
//   sku: string;
//   shipmentDate: Date;
//   skuAssignedDate: Date;
//   products: Product[];
//   createdBy: string;
//   createdDate: Date;
//   updatedBy: string;
//   updatedDate: Date;
// }

  @Input() set shipmentInfo(value: ShipmentInfo) {
    if (value) {
      this.originalId = value.id;
    }
    this.selectedShipmentInfo = Object.assign({}, value);
  }

  constructor(private shipmentInfoStore: ShipmentInfoStore) {
    this.shipmentInfoStore.init();
  }

  ngOnInit() {
    this.shipmentInfoStore.getAll$().subscribe(shipmentInfos => { this.shipmentInfos = shipmentInfos; })
  }

  routeToProducts(shipmentInfo: ShipmentInfo): void {
    this.selectedShipmentInfo = shipmentInfo;
    console.log('routeToProducts(): called...');
    // console.log("ID=" + shipmentInfo.product.id);
    // console.log("ASIN=" + shipmentInfo.product.asin);
    var products: Product[] = shipmentInfo.products;
    for (var i in products) {
      console.log("ID=" + products[i].id)
      console.log("ASIN=" + products[i].asin)
    }
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
  }
}
