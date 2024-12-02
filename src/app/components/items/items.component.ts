import { Component, Input } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Products } from '../../mock-products';
import { Product } from '../../product';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { FeaturedbrandComponent } from '../featuredbrand/featuredbrand.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ItemCardComponent, CommonModule, FilterComponent, FeaturedbrandComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  
 selectedProduct?: Product;
 products: Product[] = Products;

 totalProducts: number = this.products.length;
 totalInStock: number = this.products.filter(p => p.inStock === true).length;
 totalOutOfStock: number = this.products.filter(p => p.inStock === false).length;

 selectedFilteredRadioButton: string = "all";

 @Input() searchText: string = '';

 onFilterChange(value: string) {
  this.selectedFilteredRadioButton = value;
 }
}
