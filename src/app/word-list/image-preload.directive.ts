import { Directive, Input, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)': 'updateUrl()',
    '(load)': 'load()',
    '[src]': 'src'
  }
})

export class ImagePreloadDirective {
  @Input() src: string;
  @Input() default: string;
  @HostBinding('class') className;


  constructor(private render: Renderer2, private element: ElementRef) { }

  updateUrl() {
    this.src = this.default;
  }

  load() {
    if (this.element.nativeElement.src === this.default) {
      this.render.addClass(this.element.nativeElement, 'image-not-found');
    } else {
      this.render.removeClass(this.element.nativeElement, 'image-not-found');
    }
  }
}
