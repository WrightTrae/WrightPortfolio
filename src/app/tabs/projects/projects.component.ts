import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "projects-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    templateUrl: './projects.component.html'
})
export class ProjectsComponent extends TabItemComponent { }