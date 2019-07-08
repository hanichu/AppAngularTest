import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }
}

//import { Model } from "./repository.model";
//import { Component } from "@angular/core";

//@Component({
//  selector: "app",
//  templateUrl: "template.html"
//})
//export class ProductComponent {
//  model: Model = new Model();

//  getClasses(): string {
//    return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
//  }

//  getClassMap(key: number): Object {
//    let product = this.model.getProduct(key);
//    return {
//      "text-center bg-danger": product.name == "Kayak",
//      "bg-info": product.price < 50
//    }
//  }

//  fontSizeWithUnits: string = "30px";
//  fontSizeWithoutUnits: string = "30";

//  getStyles(key: number): Object {
//    let product = this.model.getProduct(key);
//    return {
//      fontSize: "30px",
//      "margin.px": 100,
//      color: product.price > 50 ? "red" : "green"
//    }
//  }

//}

