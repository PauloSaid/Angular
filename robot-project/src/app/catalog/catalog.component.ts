import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];
  filter: string = '';
  cart: IProduct[] = [];

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products: IProduct[]) => {
      this.products = products;
    });
    
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }

  getImageUrl(product: IProduct): string {
    return product ? 'assets/images/robot-parts/' + product.imageName : '';
  }

  getFilteredProducts(): IProduct[] {
    return this.filter === ''
      ? this.products
      : this.products.filter((product: IProduct) => product.category === this.filter);
  }

  getDiscountedClasses(product: IProduct): { [key: string]: boolean } {
    return { strikethrough: !!product && product.discount > 0 };
  }

  addToCart(product: IProduct): void {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }
}
