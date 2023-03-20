import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appColor2]'
})
export class Color2Directive {

  @Input() setColor: string = 'green'

  @Input() setValue: string = ''

  constructor(private elementRef: ElementRef) { }


  ngOnInit() {
    this.elementRef.nativeElement.style.color = this.setColor
    this.elementRef.nativeElement.innerHTML = this.setValue
  }

}
