import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
 SearchText: string = "";

 @Output() filterText: EventEmitter<string> = new EventEmitter<string>();

 onSearchTextChanged() {
  
 }

 onUpdateText(inputEl: HTMLInputElement) {
  this.SearchText = inputEl.value;
  this.filterText.emit(this.SearchText);
 }
 
}
