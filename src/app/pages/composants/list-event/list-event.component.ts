import { Component } from '@angular/core';
import { IEvent } from 'src/app/models/event.model';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent {
  listEvents: Array<IEvent>= [{
    title: "toto", category: "culturel", description: "un concert hip/hop",
    startTime: "", endTime: "", nbPartipants: 10,numero: 1,
    adresse: "rue pierre de roubaix",codePostal:59100,ville:"Lille", idUser:1
  },
  {
    title: "tata", category: "sportif", description: "combat MMA",
    startTime: "", endTime: "", nbPartipants: 10,numero: 1,
    adresse: "rue pierre de roubaix",codePostal:59100,ville:"Lille", idUser:1
  },];
  detailEvent =false;
  lookEvent!: IEvent;

  constructor () {

  }

  showDetailEvent (myEvent: IEvent) {
    this.detailEvent = true;
    this.lookEvent = myEvent;
    console.log(myEvent);
  }

}
