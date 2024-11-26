import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ItemsComponent } from './components/items/items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopHeaderComponent, SearchBarComponent, ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ekart';

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
