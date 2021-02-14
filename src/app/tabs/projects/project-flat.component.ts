import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "project-flat-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    template: 
    `
        <tab-label>
            Flat Design People
        </tab-label>
        <tab-body>
            <div class="image-container">
                <img src="/assets/images/flat-one.png" alt="Flat One">
                <img src="/assets/images/flat-two.png" alt="Flat Two">
                <img src="/assets/images/flat-three.png" alt="Flat Three">
            </div>

            <div class="description-container">
                <div>
                    <h2 class="project-header">
                        Flat Design People
                    </h2>
                    <body class="project-text">
                        <ul>
                            <li>Developed 2018</li>
                            <li>Created in Illustrator</li>
                        </ul> 
                    </body>
                </div>
                <body class="project-text">
                    I was looking through reddit and I found 
                    <a class="link-text" href="https://www.reddit.com/r/Design/comments/c468u1/what_is_this_type_of_illustration_called_whats/" target="_blank">
                        this post
                    </a>
                    . The design in the reddit post was created by google for an event, 
                    so being the google fan boy that I am it inspired me to try and recreate it. 
                    I created the first flat design person to resemble the design made by google. 
                    Then I created a couple different people with same design concept.
                </body>
            </div>
        </tab-body>
    `
})
export class ProjectFlatComponent extends TabItemComponent { }