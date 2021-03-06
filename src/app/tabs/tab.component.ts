import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  AfterContentChecked,
  Input,
} from "@angular/core";
import { TabItemComponent } from "./tab-item/tab-item.component";
import { Observable } from "rxjs";
import { startWith, map, delay } from "rxjs/operators";

@Component({
  selector: "tab-component",
  template: `
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
    `,
  styles: [
    `
        .tabs-header {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 5%;
          margin: 40px;
        }

        .tabs-body {
          margin: 40px;
        }
      `,
  ],
})
export class TabComponent implements AfterContentInit, AfterContentChecked {
  @ContentChildren('tabItem')

  tabs: QueryList<TabItemComponent>;


  tabItems$: Observable<TabItemComponent[]>;

  activeTab: TabItemComponent;

  labelStyle = {
    'transition': 'font-size .25s',
    'font-family': 'moon',
    'text-align': 'center',
  }

  selectedStyle = {
    'color': '#007BBF',
    'font-size': '45px',
  }

  unSelectedStyle = {
    'color': 'white',
    'font-size': '35px',
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