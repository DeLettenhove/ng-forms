import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { passValidator } from '../passValidator.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required]),
    emails: new FormArray([
      new FormControl()
    ])
  })
  
  get emails() {
    return this.profileForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(new FormControl());
  }

  removeEmail() {
    console.log(this.emails.removeAt(this.emails.length-1));    
  }

  onSubmit() {
    console.log(this.profileForm.value);    
  }

}
