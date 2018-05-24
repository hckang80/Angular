import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective implements OnInit {
  @Input('textColor') color: string;
  defaultColor = 'gray';

  @HostListener('mouseenter') onMouseEnter() {
    // this.changeTextColor(this.color);
    this.changeTextBold('bold');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.changeTextColor(this.color);
    this.changeTextBold(null);
  }

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.changeTextColor(this.defaultColor);
  }

  changeTextColor(color) {
    this.render.setStyle(this.el.nativeElement, 'color', color);
  }

  changeTextBold(weight) {
    this.render.setStyle(this.el.nativeElement, 'fontWeight', weight);
  }
}
