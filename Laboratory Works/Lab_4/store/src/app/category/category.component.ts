import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: any;
  category: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value => {
      this.getProducts();
      this.getCategory();
    }));
  }

  ngOnInit() {
    this.getProducts();
    this.getCategory();
  }

  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('categoryId');
    this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

  share(product): void {
    window.alert(`The product ${product.name} has been shared!`);
    window.open( `https://t.me/share/url?url=${product.link}&text=Hi! Look what I\'ve found on the Amazon.`
    );
  }

  // tslint:disable-next-line:typedef
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
