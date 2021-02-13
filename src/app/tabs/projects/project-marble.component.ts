import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "project-marble-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    template: `<tab-label>
    Vex Marble sorter
</tab-label>
<tab-body>
<div class="project-group">

<iframe src="https://www.youtube.com/embed/xBjC0kDTT14">
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

        <body>This was created using VEX programming software and VEX robotics equipment without a guide/ kit.
            It has a flashlight to shine light into the marble, so the light sensor mounted under the frame can
            detect what color it is based on the amount of light that passed throughout the marble. If the
            program can not get a solid reading of the marble it will re-scan the marble 3 times and average the
            results to find the correct color. Then a gear spins one of four Dixie cups into the correct
            position to catch the marble.
        </body>
    </div>
</div>
</div>
</tab-body>`
})
export class ProjectMarbleComponent extends TabItemComponent { }