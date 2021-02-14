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
        <img src="/assets/images/port.jpg" alt="Photos">
        <div>
            <body> I like to say that I specialize in Mobile and Cloud development, but my day to day often changes based on the tasks at hand. Because of this I often fill the roles of a Web or Backend Developer. I can confidently say that I know several programming languages and that's barely scratching the surface, but for me that's the best part about what I do. I have worked on many different apps both IOS and Android. I have also extensively worked on several projects as a web and full stack developer. .</body>
        </div>
    </div>
</tab-body>`
})
export class AboutComponent extends TabItemComponent { }