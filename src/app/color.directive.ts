import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input() 'setColor': string = 'black';


  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.color = this["setColor"];
  }
}
