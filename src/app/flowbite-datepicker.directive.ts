import { Directive, ElementRef, OnInit } from '@angular/core';

declare const Datepicker: any;

@Directive({
  selector: '[appFlowbiteDatepicker]',
})
export class FlowbiteDatepickerDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const datepickerEl = this.el.nativeElement;
    new Datepicker(datepickerEl, {
      // Customize options as needed
    });
  }
}
