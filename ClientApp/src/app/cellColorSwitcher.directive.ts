import { Directive, HostBinding, SimpleChange, ContentChild, Input } from "@angular/core";
import { PaCellColor } from "./cellColor.directive";

@Directive({
  selector: "table"
})
export class PaCellColorSwitcher {
  @Input("paCellDarkColor")
  modelProperty: boolean;

  @ContentChild(PaCellColor)
  contentChild: PaCellColor;

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    if (this.contentChild != null)
      this.contentChild.setColor(changes["modelProperty"].currentValue);
  }
}
