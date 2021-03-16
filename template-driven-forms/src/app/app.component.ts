import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', "React", "Vue"];
  topicHasError = true;
  
  userModel = new User("Mani", "manikarthi25@gmail.com", 999999, 'Default', 'morning', true);

  validateTopic(value : any) {
    if(value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
}
