import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SignService} from "../../../core/services/sign.service";
import {IUser} from "../../../core/models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  submitted = false;
  userService:SignService

  constructor(private formBuilder: FormBuilder, userService:SignService,
              private router: Router) {
    this.userService = userService
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

/*  onSubmit() {
    console.log('onsubmit called');
      this.submitted = true;
      this.userService.addUser(this.form.value);

  }*/

  onSubmit() {
    console.log(this.form.valid);
    this.submitted = true;
    if (this.form.valid) {
      const userData: Partial<IUser> = {
        email: this.form.value.email,
        password: this.form.value.password
      };
      this.userService.login(userData).subscribe(data => {
          const {email,...idAndName} = data
          localStorage.setItem('user',JSON.stringify( idAndName))
          this.router.navigate(['/event']);
        }
      );

    }
  }
}
