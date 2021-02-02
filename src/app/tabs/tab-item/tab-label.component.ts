import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

@Component({
    selector: "tab-label",
    template: "<ng-template><ng-content></ng-content></ng-template>  ",
})
export class TabLabelComponent implements OnInit {
    @ViewChild(TemplateRef, { static: true })
    labelContent: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void { }
}