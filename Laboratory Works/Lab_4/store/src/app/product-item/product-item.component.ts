import { Component, OnInit, Input } from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }
}
