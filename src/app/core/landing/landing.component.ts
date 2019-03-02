import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
    private title = 'Task Tracker';

    constructor() {}

    ngOnInit() {}

    getTitle() {
        return this.title;
    }
}
