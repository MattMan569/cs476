// https://www.telerik.com/kendo-angular-ui/components/scheduler/

import { Component, OnInit } from '@angular/core';

import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from './events-utc';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
    public selectedDate: Date = displayDate;
    public startTime = '07:00';
    public events: SchedulerEvent[] = sampleData;

    constructor() {}
}
