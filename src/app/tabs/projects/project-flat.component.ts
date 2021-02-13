import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "project-flat-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    template: `<tab-label>
    Flat Design People
</tab-label>
<tab-body>
<div class="project-group">

<div class="image-container">
<img src="/assets/images/flat-one.png" alt="Flat One">
<img src="/assets/images/flat-two.png" alt="Flat Two">
<img src="/assets/images/flat-three.png" alt="Flat Three">
</div>

<div class="grid-container">
    <div>
        <body>I was looking through reddit and I found this post:
            https://www.reddit.com/r/Design/comments/c468u1/what_is_this_type_of_illustration_called_whats/ and
            I really enjoyed the style of the illustration. This made me want to give this illustration style a
            try, so I replicated the Flat Design person from the reddit post then made a couple other versions.
        </body>
    </div>
</div>
</div>
</tab-body>`
})
export class ProjectFlatComponent extends TabItemComponent { }