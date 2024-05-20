import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AccountService } from '../_services';

@Component({
templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
@ViewChild('calendarEl') calendarEl: ElementRef;
calendar: Calendar;
eventDate: string; // Property to hold the date input
eventDescription: string; // Property to hold the description input

account: any; // Define type based on your AccountService data structure

constructor(private accountService: AccountService) {}

ngOnInit() {
this.account = this.accountService.accountValue;
}

ngAfterViewInit() {
if (this.calendarEl && this.calendarEl.nativeElement) {
this.calendar = new Calendar(this.calendarEl.nativeElement, {
plugins: [dayGridPlugin],
initialView: 'dayGridMonth',
events: [
// Add your calendar events here (if needed)
{ title: 'Event 1', start: '2024-05-10' },
{ title: 'Jodel Birthday', start: '2024-06-19', end: '2024-06-19' },
{ title: 'Intprog Final', start: '2024-05-21', end: '2024-05-21' }
]
});
this.calendar.render();
}
}

addEvent() {
if (this.calendar && this.eventDate && this.eventDescription) {
this.calendar.addEvent({
title: this.eventDescription, // Use the description as the title
start: this.eventDate, // Use the selected date
allDay: true
});
}
}
}