import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective {
  @Input() changeColor = 'blue';
  defaultColor = 'blue';

  @HostListener('change') onchange() {
    this.changeColor = this.el.nativeElement.value;
    // if (this.el.nativeElement.checked) this.render.setStyle(this.el.nativeElement.parentNode, 'border', '1px solid #000')
  }

  constructor(private el: ElementRef, private render: Renderer2) {
    // console.log(el, render);
  }

  ngOnInit() {
    console.log(this.changeColor);
    this.render.setStyle(this.el.nativeElement, 'color', this.defaultColor);
  }
}
