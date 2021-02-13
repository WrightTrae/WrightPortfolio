import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "project-gng-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    template: `<tab-label>
    Go/No Go
</tab-label>
<tab-body>
<div class="project-group">
    <a href="https://play.google.com/store/apps/details?id=com.wright.android.t_minus" target="_blank">Google
        Play
        Store
        Link</a>

    <div class="image-container">
        <img src="/assets/images/gng-login.gif" alt="Login Animation">
        <img src="/assets/images/gng-manifest.gif" alt="Manifest">
        <img src="/assets/images/gng-ar.gif" alt="AR">
        <img src="/assets/images/gng-photos.gif" alt="Photos">
    </div>

    <div class="grid-container">
        <div>
            <body>The goal of this application is to provided users with the ability to stay up to date on
                rocket
                launches
                taking place and make the process of viewing the launch a breeze. It will allow users to see
                when a
                rocket
                launch will take place then see the launch pad in their camera using AR technology. This will
                allow
                the user
                to know exactly where to look when the rocket is about to launch so they never miss a moment. It
                also will
                suggest restaurants nearby the rocket launch that offer deals for people wanting to view the
                launch.
            </body>
        </div>
    </div>
</div>
</tab-body>`
})
export class ProjectGNGComponent extends TabItemComponent { }