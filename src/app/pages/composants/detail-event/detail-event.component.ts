import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/core/models/event.model';
import {EventService} from "../../../core/services/event.service";
import {
  PartialClassMetadataLinkerVersion1
} from "@angular/compiler-cli/linker/src/file_linker/partial_linkers/partial_class_metadata_linker_1";
import {IUser} from "../../../core/models/user.model";

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent {
  @Input() seeEvent!: IEvent ;
  eventService!: EventService;
  constructor(private event: EventService) {
    this.eventService = event;
  }

  participe() {
    console.log("Je participe");
    let user= JSON.parse(localStorage.getItem('user')||"");
    let data = {
      "userId": user.id,
      "eventId": this.seeEvent.id
    };

    this.eventService.updateEvent(data).subscribe();
  }
}

