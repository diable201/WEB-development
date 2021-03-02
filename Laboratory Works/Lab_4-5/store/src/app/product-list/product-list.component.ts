import {Component} from '@angular/core';

import {products} from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;

  share(product): void {
    window.alert(`The product ${product.name} has been shared!`);
    window.open(`https://t.me/share/url?url=${product.link}&text=Hi! Look what I\'ve found on the Amazon.`
    );
  }

  removeUpload(product): void {
    // get index/position of uploadItem within array
    const index: number = this.products.indexOf(product);
    // if index returned is negative it means element not found in array
    // else: (positive) index can be used
    // e.g. to remove the single element at this position
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
