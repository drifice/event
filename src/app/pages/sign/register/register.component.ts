import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SignService} from "../../../core/services/sign.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  userservice!:SignService;

  constructor(private formBuilder: FormBuilder,
    private userService: SignService  ) {
    this.userservice = userService;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
        nom: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.userService.addUser(this.form.value);

  }
}
