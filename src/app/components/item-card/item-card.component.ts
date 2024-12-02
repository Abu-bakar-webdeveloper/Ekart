import { Component, Input } from '@angular/core';
import { Product } from '../../product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../CustomDirective/highlight.directive';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [FormsModule, CommonModule, HighlightDirective],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
@Input() product!: Product;
}
