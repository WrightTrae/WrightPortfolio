import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "project-shared-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    template: `<tab-label>
    Shared Goods
</tab-label>
<tab-body>
<div class="project-group">

<div class="image-container">
</div>

<div class="grid-container">
    <div>
        <h2>Tech Overview</h2>

        <body>The goal of this application is to provided users with the ability to stay up to date on rocket
            launches
            taking place and make the process of viewing the launch a breeze. It will allow users to see when a
            rocket
            launch will take place then see the launch pad in their camera using AR technology. This will allow
            the user
            to know exactly where to look when the rocket is about to launch so they never miss a moment. It
            also will
            suggest restaurants nearby the rocket launch that offer deals for people wanting to view the launch.
        </body>
    </div>
    <div>
        <h2>Description</h2>

        <body>Shared Goods is a shared grocery list app that allows multiple people on separate devices to
            interact with the list. You can invite up to two other people to join your list. When someone other
            than you removes an item from the list it will send a notification to your watch letting you know
            that they have gotten that item.
        </body>
    </div>
</div>
</div>
</tab-body>`
})
export class ProjectSharedComponent extends TabItemComponent { }