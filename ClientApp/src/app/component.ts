import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { ProceduralRenderer3 } from "@angular/core/src/render3/renderer";
import { NgForm } from "@angular/forms"

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();

  //constructor(ref: ApplicationRef) {
  //  (<any>window).appRef = ref;
  //  (<any>window).model = this.model;
  //}

  //getProductByPosition(position: number): Product {
  //  return this.model.getProducts()[position];
  //}

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("new product: " + this.jsonProduct);
  }

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${thing}`);
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
            break;
          case "pattern":
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      this.addProduct(this.newProduct);

      this.newProduct = new Product();
      form.reset();

      this.formSubmitted = false;
    }
  }

  //selectedProduct: string;

  //getSelected(product: Product): boolean {
  //  return product.name == this.selectedProduct;
  //}

  //  getProductCount(): number {
  //    console.log("getProductCount invoked");
  //    return this.getProducts().length;
  //  }

  //  targetName: string = "Kayak";

  //  counter: number = 1;

  //  get nextProduct(): Product {
  //    return this.model.getProducts().shift();
  //  }

  //  getProductPrice(index: number): number {
  //    return Math.floor(this.getProduct(index).price);
  //  }
}




//import { ApplicationRef, Component } from "@angular/core";
//import { Model } from "./repository.model";
//import { Product } from "./product.model";

//@Component({
//  selector: "app",
//  templateUrl: "template.html"
//})
//export class ProductComponent {
//  model: Model = new Model();

//  constructor(ref: ApplicationRef) {
//    (<any>window).appRef = ref;
//    (<any>window).model = this.model;
//  }

//  getProductByPosition(position: number): Product {
//    return this.model.getProducts()[position];
//  }

//  getClassesByPosition(position: number): string {
//    let product = this.getProductByPosition(position);
//    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
//  }
//}

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
//
