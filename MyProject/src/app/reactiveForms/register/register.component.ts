import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../../models/IUser';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: IUser;

  constructor(private fb: FormBuilder) {
    this.user = { id: '', name: '', email: '', password: '', confirmEmail: '', confirmPassword: '' };
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      confirmEmail: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  ngOnInit(): void {
    
  }

  addUser(){
    this.user = Object.assign({}, this.user, this.registerForm.value);
  }
}
