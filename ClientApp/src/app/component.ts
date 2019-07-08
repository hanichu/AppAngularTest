import { Model } from "./repository.model";
import { Component } from "@angular/core";

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();

  getClasses(): string {
    return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
  }
}
