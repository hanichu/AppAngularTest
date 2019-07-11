import { Pipe } from "@angular/core";
import { DiscountService } from "./discount.service";

@Pipe({
  name: "discount",
  pure: false
})
export class PaDiscountPipe {
  constructor(private disc: DiscountService) { }

  transform(price: number): number {
   return this.disc.applyDiscount(price);
  }
}
