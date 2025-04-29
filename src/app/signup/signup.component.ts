import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    let formControls = {
      name: new FormControl('',[
        Validators.required,]),

      email: new FormControl('',[
          Validators.required,
          Validators.email]),

      password: new FormControl('',[
          Validators.required,]),    

    }
    this.signupForm = this.fb.group(formControls)
  }
  get name() {return this.signupForm.get('name');}
  get email() {return this.signupForm.get('email');}
  get password() {return this.signupForm.get(' password');}

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.signupForm.valid) {
      // Afficher les données dans la console
      console.log('Form Submitted Successfully:', this.signupForm.value);
    } else {
      console.log('Form is invalid. Please fill out all fields correctly.');
    }
  }
}
