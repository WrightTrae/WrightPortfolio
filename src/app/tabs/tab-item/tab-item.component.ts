import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  ViewChild,
  TemplateRef,
  ContentChild,
} from "@angular/core";
import { TabBodyComponent } from "./tab-body.component";
import { TabLabelComponent } from "./tab-label.component";


@Component({
  selector: "tab-item",
  template: "<ng-content></ng-content>",
})
export class TabItemComponent {
  @Input()
    label: string;

    @Input()
    isActive: boolean;

    @ViewChild(TabBodyComponent, { static: true }) bodyComponent: TabBodyComponent;


    @ViewChild(TabLabelComponent, { static: true }) labelComponent: TabLabelComponent;
}