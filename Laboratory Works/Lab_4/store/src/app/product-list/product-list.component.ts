import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;

  // tslint:disable-next-line:typedef
  share(product) {
    window.alert(`The product ${product.name} has been shared!`);
    window.open( `https://t.me/share/url?url=${product.link}&text=Hi! Look what I\'ve found on the Amazon.`
    );
  }

  // tslint:disable-next-line:typedef
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
