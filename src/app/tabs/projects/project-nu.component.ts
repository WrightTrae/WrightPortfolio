import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "project-nu-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    template: `<tab-label>
    Nû
</tab-label>
<tab-body>
<div class="project-group">

<iframe src="https://www.youtube.com/embed/garVm3b0U-s">
</iframe>

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

        <body>Nû helps people better organize their food by keeping track of what they have and suggesting
            recipes based on the food they currently have. On top of that Nû will also notify the user before
            food items perish date. This app gives you the knowledge to cook a meal every night without having
            to hopelessly search through recipes that you found online for the perfect recipe that you have all
            the ingredients for. All you have to do is receipt as soon as you get home and then you will
            instantly receive recommendations for what to eat.
        </body>
    </div>
</div>
</div>
</tab-body>`
})
export class ProjectNuComponent extends TabItemComponent { }