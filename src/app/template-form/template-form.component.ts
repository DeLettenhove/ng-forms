import { Component, OnInit } from '@angular/core';

import { User } from '../user'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  model = new User('john@mail.com', 'qwerty!2')
  submited = false;

  onSubmit() {
    this.submited = true;
    console.log(JSON.stringify(this.model));
    
  }
}
