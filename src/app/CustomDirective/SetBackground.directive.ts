import { Directive, ElementRef, OnInit, Renderer2, Input } from "@angular/core";
import { title } from "process";


@Directive({
    selector: '[setBackground]',
    standalone: true
})

export class SetBackground implements OnInit{

    @Input() backColor: string = '#36454f';
    @Input() textColor: string = 'white';
    constructor(private element: ElementRef, private renderer: Renderer2){
        
    }

    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = '#36454f';
        // this.element.nativeElement.style.color = 'white';

        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'this is example title')
    }
}