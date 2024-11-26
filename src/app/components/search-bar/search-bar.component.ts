import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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


 @ViewChild('InputSearch') searchInputEl?: ElementRef;

 onUpdateText() {
  this.SearchText = this.searchInputEl?.nativeElement.value;
  this.filterText.emit(this.SearchText);
 }
 
}
