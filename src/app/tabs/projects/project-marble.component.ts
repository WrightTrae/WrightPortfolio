import { Component } from "@angular/core";
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
    selector: "project-marble-tab",
    styleUrls: ['../../app.component.scss', '../styles/style.scss'],
    template: 
    `
        <tab-label>
            Vex Marble sorter
        </tab-label>
        <tab-body>
            <div class="container">
            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/xBjC0kDTT14">
            </iframe>
            </div>

            <div class="description-container">
                <div>
                    <h2 class="project-header">
                        Vex Marble Sorter
                    </h2>
                    <body class="project-text">
                        <ul>
                            <li>Developed 2016</li>
                            <li>Developed using ROBOTC</li>
                            <li>Used a light sensor with averaging values to determine the color</li>
                        </ul> 
                    </body>
                </div>
                <body class="project-text">
                    This was created using VEX programming software and VEX robotics equipment without a guide/ kit.
                    It has a flashlight to shine light into the marble, so the light sensor mounted under the frame can
                    detect what color it is based on the amount of light that passed throughout the marble. If the
                    program can not get a solid reading of the marble it will re-scan the marble 3 times and average the
                    results to find the correct color. Then a gear spins one of four Dixie cups into the correct
                    position to catch the marble.
                </body>
            </div>
        </tab-body>
    `
})
export class ProjectMarbleComponent extends TabItemComponent { }