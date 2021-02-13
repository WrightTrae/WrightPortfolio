import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  AfterContentChecked,
} from "@angular/core";
import { TabItemComponent } from "../tab-item/tab-item.component";
import { Observable } from "rxjs";
import { startWith, map, delay } from "rxjs/operators";

@Component({
  selector: "project-tab-component",
  template: `
  <div class="container">
      <div class="tabs-header">
        <div
          (click)="selectTab(item)"
          [ngStyle]="getStyle(item)"
          *ngFor="let item of tabItems$ | async"
        >
          <ng-container *ngIf="item.labelComponent">
            <ng-container *ngTemplateOutlet="item.labelComponent.labelContent">
            </ng-container>
          </ng-container>
          <ng-container *ngIf="!item.labelComponent">
            {{ item.label }}
          </ng-container>
        </div>
      </div>
      <div class="tabs-body">
        <ng-container *ngIf="activeTab && activeTab.bodyComponent">
          <ng-container *ngTemplateOutlet="activeTab.bodyComponent.bodyContent">
          </ng-container>
        </ng-container>
      </div>
      </div>
    `,
  styles: [
    `
        .container {
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 5%;
            width: 90%;
            margin: 0 auto;
            margin-top: 60px;
        }

        .tabs-header {
          display: grid;
          grid-gap: 1%;
          grid-template-rows: auto auto auto auto auto 1fr;
        }

        .tabs-body {

        }
      `,
  ],
})
export class ProjectTabComponent implements AfterContentInit, AfterContentChecked {
  @ContentChildren('tabItem')

  tabs: QueryList<TabItemComponent>;


  tabItems$: Observable<TabItemComponent[]>;

  activeTab: TabItemComponent;

  labelStyle = {
    'transition': 'font-size .25s',
    'font-family': 'Roboto',
    'text-align': 'left',
  }

  selectedStyle = {
    'color': 'white',
    'font-size': '26px',
  }

  unSelectedStyle = {
    'color': '#858585',
    'font-size': '25px',
  }

  constructor() { }

  ngAfterContentInit(): void {
    this.tabItems$ = this.tabs.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => {
        console.log(this.tabs);

        return this.tabs.toArray()
      }));
    console.log(this.tabItems$);

  }

  ngAfterContentChecked() {
    //choose the default tab
    // we need to wait for a next VM turn,
    // because Tab item content, will not be initialized yet
    if (!this.activeTab) {
      Promise.resolve().then(() => {
        this.activeTab = this.tabs.first;
      });
    }
  }

  selectTab(tabItem: TabItemComponent) {
    if (this.activeTab === tabItem) {
      return;
    }

    if (this.activeTab) {
      this.activeTab.isActive = false;
    }

    this.activeTab = tabItem;

    tabItem.isActive = true;
  }

  getStyle(tabItem: TabItemComponent) {
    return Object.assign(this.labelStyle, this.activeTab === tabItem ? this.selectedStyle : this.unSelectedStyle);
  }
}