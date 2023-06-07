import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SignService} from "../../../core/services/sign.service";
import {IUser} from "../../../core/models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  submitted = false;
  userService:SignService

  constructor(private formBuilder: FormBuilder, userService:SignService ) {
    this.userService = userService
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit() {
    console.log('onsubmit called');
      this.submitted = true;
      this.userService.addUser(this.form.value)

  }
}
