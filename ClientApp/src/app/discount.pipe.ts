import { Pipe } from "@angular/core";
import { DiscountService } from "./discount.service";

@Pipe({
  name: "discount",
  pure: false
})
export class PaDiscountPipe {
  constructor(private disc: DiscountService) { }

  transform(price: number): number {
    if (price < 5) return price;
    if (this.disc.discount > price) return 5;


    return price - this.disc.discount;
  }
}
