import { Component } from "@angular/core";
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
    selector: "about-tab",
    styleUrls: ['../app.component.scss'],
    template: `<tab-label>
    About Me
</tab-label>
<tab-body>
    <div class="grid-container">
        <div>
            <h2>Personal Interests</h2>

            <body>Taking your medication as prescribed is the best way to get the full benefits of your treatment, which
                will
                ultimately lead to better health and lower healthcare costs. The Smart Med Reminder™ mobile application
                works
                with a connected prescription cap that you receive from your pharmacist or health care provider to help
                you
                follow your doctor's instructions.</body>
        </div>
        <div>
            <h2>Professional Skills</h2>

            <body>Taking your medication as prescribed is the best way to get the full benefits of your treatment, which
                will
                ultimately lead to better health and lower healthcare costs. The Smart Med Reminder™ mobile application
                works
                with a connected prescription cap that you receive from your pharmacist or health care provider to help
                you
                follow your doctor's instructions.</body>
        </div>
    </div>
</tab-body>`
})
export class AboutComponent extends TabItemComponent { }