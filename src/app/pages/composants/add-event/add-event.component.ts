import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EventService} from "../../../core/services/event.service";
import {SignService} from "../../../core/services/sign.service";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent  {
  ajouter= false;
  form!: FormGroup;
  eventService!: EventService;
  user!: SignService;
  constructor(
    private formBuilder: FormBuilder,
    private event: EventService,
    private userService: SignService
  ) {
    this.user = userService;
    this.eventService = event;
    //this.userService.
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      adresse: ['', Validators.required],
      cp: ['', Validators.required],
      ville: ['', Validators.required],
      participants: [[JSON.parse(localStorage.getItem('user')||"")]]
  });
  }
  add() {
    this.ajouter = true;
  }

  cancel() {
    this.ajouter = false;
  }

  onSubmit() {
    console.log("ajouter", this.form.value);
    this.eventService.addEvent(this.form.value).subscribe();
    this.ajouter = false;
  }
}
