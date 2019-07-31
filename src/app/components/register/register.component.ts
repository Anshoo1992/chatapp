import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from '../../services/common/must-match.validator';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm:FormGroup;
  submitted = false;
  account_validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'maxlength', message: 'Phone cannot be more than 10 digits long ' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
    }
  constructor(private fb: FormBuilder,private router:Router) {

    this.registrationForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.minLength(8)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ])),

    }, (formGroup: FormGroup) => {
      return PasswordValidator.mustMatch('password', 'confirmPasswor');
    });
  }

  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value));
    this.router.navigate(['/profile']);
  }
}
