import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  constructor(private elemrnt: ElementRef, private renderer: Renderer2) { }

 @HostBinding('style.background') backgroudColor: string = '#28282b';
 @HostBinding('style.border') border: string = 'none';
 @HostBinding('style.color') textColor: string = 'white';

 @HostListener('mouseenter') onMouseEnter() {
  this.backgroudColor = 'white';
  this.border = '3px solid #28282b';
  this.textColor = '#28282b'
 }

 @HostListener('mouseout') onMouseOut() {
  this.backgroudColor = '#28282b';
  this.border = 'none';
  this.textColor = 'white'
 }

}
