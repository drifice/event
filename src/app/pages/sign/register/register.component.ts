import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  form!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        nom: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log('enregistrer');
  }
}
