import { Injectable, Inject } from "@angular/core";
import { LogService, LOG_SERVICE } from "./log.service";

@Injectable()
export class DiscountService {
  private discountValue: number = 10;

  constructor(@Inject(LOG_SERVICE)  private logger: LogService) { }

  public get discount(): number {
    return this.discountValue;
  }

  public set discount(newValue: number) {

    this.logger.logInfoMessage("Discount " + this.discount + " applied");

    this.discountValue = newValue || 0;
  }

  public applyDiscount(price: number) {
    this.logger.logInfoMessage("Discount " + this.discount + " applied");
    return Math.max(price - (price*(this.discountValue/100)), price-(price*0.99));
  }

}
