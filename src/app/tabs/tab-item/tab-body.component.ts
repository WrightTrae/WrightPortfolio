import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

@Component({
    selector: "tab-body",
    template: "<ng-template><ng-content></ng-content></ng-template>"
})
export class TabBodyComponent implements OnInit {
    @ViewChild(TemplateRef, { static: true })
    bodyContent: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void { }
}