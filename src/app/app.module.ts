import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { TypewriterDirective } from './directives/typewriter.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule} from '@angular/material/core';
import { TabComponent } from './tabs/tab.component';
import { TabBodyComponent } from './tabs/tab-item/tab-body.component';
import { TabLabelComponent } from './tabs/tab-item/tab-label.component';
import { TabItemComponent } from './tabs/tab-item/tab-item.component';
import { AboutComponent } from "./tabs/about.component";
import { ProjectsComponent } from "./tabs/projects/projects.component";
import { ContactComponent } from './tabs/contact.component';
import { ProjectTabComponent } from './tabs/projects/project-tabs.component';
import { ProjectGNGComponent } from './tabs/projects/project-gng.component';
import { ProjectFlatComponent } from './tabs/projects/project-flat.component';
import { ProjectNuComponent } from './tabs/projects/project-nu.component';
import { ProjectMarbleComponent } from './tabs/projects/project-marble.component';
import { ProjectSharedComponent } from './tabs/projects/project-shared.component';



@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    TypewriterDirective,
    TabComponent,
    ProjectTabComponent,
    TabItemComponent,
    TabBodyComponent,
    TabLabelComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectGNGComponent,
    ProjectFlatComponent,
    ProjectNuComponent,
    ProjectMarbleComponent,
    ProjectSharedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
