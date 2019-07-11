import { Component, Input } from '@angular/core';
import { DiscountService } from './discount.service';

@Component({
  selector: 'paDiscountDisplay',
  template: "<div> The discount is {{ discounter.discount}}</div>"
})
export class PaDiscountDisplayComponent {
  //@Input("discounter")
  //discounter: DiscountService;

  //Dependancy Injection
  constructor(private discounter: DiscountService) {

  }
}
