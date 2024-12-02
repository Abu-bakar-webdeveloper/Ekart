import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ItemsComponent } from './components/items/items.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductDetailComponent, HeaderComponent, TopHeaderComponent, SearchBarComponent, ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ekart';

  searchText: string = '';

  @ViewChild(ItemsComponent) productListComponent?: ItemsComponent;

  setSearchText(value: string) {
    this.searchText = value;
  }
}
