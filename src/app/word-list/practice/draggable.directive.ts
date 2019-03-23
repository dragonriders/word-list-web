import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private p1; p2; p3; p4;
  constructor(private el: ElementRef, private render: Renderer2) {
    console.log(this.el);
    this.el.nativeElement.onmousedown = this.dragMouseDown;
    this.p1 = this.p2 = this.p3 = this.p4 = 0;
  }

  dragMouseDown = (event) => {
    console.log(event);
    event = event || window.event;
    event.preventDefault();
    // console.log(`drag mouse to ${this.el.nativeElement.clientX} ${this.el.nativeElement.clientY}`);
    this.p3 = event.clientX;
    this.p4 = event.clientY;
    this.el.nativeElement.onmouseup = this.closeDrag;
    this.el.nativeElement.onmousemove = this.elementDrag;

  }

  elementDrag = (event) => {
    event = event || window.event;
    event.preventDefault();
    this.p1 = this.p3 - event.clientX;
    this.p2 = this.p4 - event.clientY;
    this.p3 = event.clientX;
    this.p4 = event.clientY;
    this.render.setStyle(this.el.nativeElement, 'top', (this.el.nativeElement.offsetTop - this.p2) + 'px');
    this.render.setStyle(this.el.nativeElement, 'left', (this.el.nativeElement.offsetLeft - this.p1) + 'px');
  }

  closeDrag = () => {
    this.el.nativeElement.onmouseup = null;
    this.el.nativeElement.onmousemove = null;
  }

}
