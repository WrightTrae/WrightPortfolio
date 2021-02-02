import { Component } from "@angular/core";
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
    selector: "contact-tab",
    styleUrls: ['../app.component.scss'],
    templateUrl: './contact.component.html'
})
export class ContactComponent extends TabItemComponent { }