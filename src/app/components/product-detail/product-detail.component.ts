import { Component, Input } from '@angular/core';
import { ItemsComponent } from '../items/items.component';
import { Product } from '../../product';
import { CommonModule } from '@angular/common';
import { SetBackground } from '../../CustomDirective/SetBackground.directive';
import { HoverDirective } from '../../CustomDirective/hover.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, SetBackground, HoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() productListComp?: ItemsComponent = undefined;

  product?: Product;

  ngOnInit(){
    this.product = this.productListComp?.selectedProduct;
  }

}
