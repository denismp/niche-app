import { Component, OnInit, Input } from '@angular/core';
import { ContactInfo } from 'src/app/models/contact-info.model';
import { ContactInfoStore } from 'src/app/stores/contact-info-store';
import { Product } from 'src/app/models/product.model';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  contactInfos: ContactInfo[];

  originalId: number;
  selectedContactInfo: ContactInfo = {
    id: null,
    name: '',
    phone1: '',
    phone2: '',
    address1: '',
    address2: '',
    city: '',
    stateOrProvince: '',
    country: '',
    postalCode: '',
    email: '',
    contactDate: null,
    notes: '',
    product: null,
    createdBy: '',
    createdDate: null,
    updatedBy: '',
    updatedDate: null
  };

  @Input() set contactInfo(value: ContactInfo) {
    if (value) {
      this.originalId = value.id;
    }
    this.selectedContactInfo = Object.assign({}, value);
  }

  constructor(private contactInfoStore: ContactInfoStore) {
    this.contactInfoStore.init();
  }

  ngOnInit() {
    this.contactInfoStore.getAll$().subscribe(contactInfos => { this.contactInfos = contactInfos; })
  }

  routeToProducts(contactInfo: ContactInfo): void {
    this.selectedContactInfo = contactInfo;
    console.log('routeToProduct(): called...');
    console.log("Contact Info ID=" + contactInfo.id);
    console.log("Contact Info EMAIL=" + contactInfo.email);
    // var products: Product[] = contactInfo.product;
    // for (var i in products) {
    //   console.log("ID=" + products[i].id)
    //   console.log("ASIN=" + products[i].asin)
    // }
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
  }

}
