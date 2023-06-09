import {Directive, ElementRef, Input, OnInit} from '@angular/core';


@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit{

  @Input() setColor: string = 'blue'
  @Input() setValue: string = ''

  constructor(private elementRef: ElementRef) { }


  ngOnInit() {
    this.elementRef.nativeElement.style.color = this.setColor
    this.elementRef.nativeElement.innerHTML = this.setValue
  }

}
