import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/models/event.model';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent {
  @Input() seeEvent!: IEvent ;
  constructor() {
  }

  follow() {
    console.log("Je participe");
  }
}
