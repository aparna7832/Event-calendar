import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listWeekPlugin from '@fullcalendar/list';
import listDayPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { EventCalendarService } from './calendar.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  calendarPlugins = [
    dayGridPlugin,
    listWeekPlugin,
    listDayPlugin,
    interactionPlugin
  ]
  calendarEvents: any[] = [];

  constructor(private calservice: EventCalendarService) { }

  //Populate the calendar with the events on component initialization
  ngOnInit() {
    this.calservice.getEvents().subscribe((events) => {
      for (let i in events) {
        this.calendarEvents = this.calendarEvents.concat([{
          start: events[i]['start_datetime'],
          title: events[i]['title'],
          end: events[i]['end_datetime'],
          description: events[i]['description_short']
        }])
      }

    })
  }

  //To add new events on double clicking a cell in the calendar 
  dayRender(args) {
    var cell: HTMLElement = args.el;
    cell.ondblclick = (ev: MouseEvent) => {
      this.addEvent(args.date);
    }
  }

  /* 
     will prompt the user to get the fields and 
     populate created events in the corresponding calendar cell 
 */
  addEvent(date) {
    alert(date);
    var title = prompt('Enter event Title');
    var end = prompt('Enter the end date');
    var desc = prompt('Enter a short description');
    if (title == '') return;
    this.calendarEvents = this.calendarEvents.concat([{
      title: title,
      start: date,
      end: end,
      description: desc
    }])
  }

  // Popover on calendar cell will display the short description and title 
  addingPopOver(info) {
    var element = info.el;
    $(element).css('cursor', 'pointer');
    element.setAttribute('data-toggle', 'popover');
    element.setAttribute('title', info.event.title);
    element.setAttribute('data-content', info.event.extendedProps.description);
    $(element).popover();
  }

  // To disable the selected popover when the month is changed 
  disablingPopOver() {
    $("[data-toggle= 'popover']").popover('dispose');
  }

}
