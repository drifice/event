import { Component } from '@angular/core';
import { IEvent } from 'src/app/core/models/event.model';
import {EventService} from "../../../core/services/event.service";

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})

export class ListEventComponent {

  events!: IEvent[];
  eventData:any;
  detailEvent: boolean= false;
  constructor(private eventService: EventService) {
    this.eventService.getAllEvents()
        .subscribe(data => {
          this.events = data;
        })
  }

  getEvents(){

  }

  showEvent(id: string){
    this.detailEvent =true;

    this.eventService.getEventById(id)
      .subscribe(data => {
        this.eventData = data[0];
      })
  }
}
