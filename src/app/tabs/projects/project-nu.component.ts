import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "project-nu-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    template: 
    `
        <tab-label>
            Nû
        </tab-label>
        <tab-body>
            <div class="container">
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/garVm3b0U-s"></iframe>
            </div>

            <div class="description-container">
                <div>
                    <h2 class="project-header">
                        Nû
                    </h2>
                    <body class="project-text">
                        <ul>
                            <li>Developed 2018</li>
                            <li>Frontend is Native Android and backend is hosted on Firebase</li>
                            <li>Uses opencv to read and parse receipts</li>
                        </ul> 
                    </body>
                </div>

                <body class="project-text">
                    Nû helps people better organize their food by keeping track of what they have and suggesting
                    recipes based on the food they currently have. On top of that Nû will also notify the user before
                    food items perish date. This app gives you the knowledge to cook a meal every night without having
                    to hopelessly search through recipes that you found online for the perfect recipe that you have all
                    the ingredients for. All you have to do is receipt as soon as you get home and then you will
                    instantly receive recommendations for what to eat.
                </body>
            </div>
        </tab-body>`
})
export class ProjectNuComponent extends TabItemComponent { }