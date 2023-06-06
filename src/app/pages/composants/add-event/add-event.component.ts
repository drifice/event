import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  ajouter= false;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      titre: ['', Validators.required],
      categorie: ['', Validators.required],
      description: ['', Validators.required],
      nbparticipant: ['', Validators.required],
      datedebut: ['', Validators.required],
      datefin: ['', Validators.required],
      numero: ['', Validators.required],
      adresse: ['', Validators.required],
      cp: ['', Validators.required],
      ville: ['', Validators.required],
  });
  }

  ngOnInit() {

  }

  add() {
    this.ajouter = true;
  }

  cancel() {
    this.ajouter = false;
  }
  onSubmit() {
    console.log("ajouter", this.form.value);
    this.ajouter = false;
  }
}
