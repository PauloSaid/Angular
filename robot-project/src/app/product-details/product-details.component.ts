import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: any;
  @Output() buy = new EventEmitter();

  getImageUrl(product : IProduct){
    if(!product) return '';
    return 'assets/images/robot-parts/' + product.imageName
  }

  getDiscountedClasses(product : IProduct){
    return {strikethrough: product.discount > 0}
  }

  buyButtonClicked(product: IProduct){
    this.buy.emit()
  }
}
