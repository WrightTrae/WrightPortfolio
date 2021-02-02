import { Component } from "@angular/core";
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
    selector: "about-tab",
    styleUrls: ['../app.component.scss'],
    templateUrl: './about.component.html'
})
export class AboutComponent extends TabItemComponent { }