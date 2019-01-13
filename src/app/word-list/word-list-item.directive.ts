import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appWordListItem]'
})
export class WordListItemDirective {

  @HostBinding('style.background') bgColor: string;

  @HostListener('click') attachActiveLabel() {
    this.bgColor = 'green';
  }


  constructor() { }

}
