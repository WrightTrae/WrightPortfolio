import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "project-shared-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    template: 
    `
        <tab-label>
            Shared Goods
        </tab-label>

        <tab-body>
            <div class="description-container">
                <div>
                    <h2 class="project-header">
                        Shared Goods
                    </h2>
                    <body class="project-text">
                        <ul>
                            <li>Developed 2017</li>
                            <li>Frontend is Native Android and Native iOS, the backend is hosted on Firebase</li>
                        </ul> 
                    </body>
                </div>
                <body class="project-text">
                    Shared Goods is a shared grocery list app that allows multiple people on separate devices to
                    interact with the list. You can invite up to two other people to join your list. When someone other
                    than you removes an item from the list it will send a notification to your watch letting you know
                    that they have gotten that item.
                </body>
            </div>
        </tab-body>
    `
})
export class ProjectSharedComponent extends TabItemComponent { }