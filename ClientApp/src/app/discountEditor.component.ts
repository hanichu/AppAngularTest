import { Component } from '@angular/core';
import { DiscountService } from './discount.service';

@Component({
  selector: 'paDiscountEditor',
  template: "<div><input [(ngModel)]='discounter.discount'/></div>"
})
export class PaDiscountEditorComponent {
  //@Input("discounter")
  //discounter: DiscountService;

  //Dependancy Injection
  constructor(private discounter: DiscountService) {}
}
