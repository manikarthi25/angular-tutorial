import { Component } from '@angular/core';
import { EntrollmentService } from './entrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', "React", "Vue"];
  topicHasError = true;

  isSubmitted = false;

  constructor(private entrollmentService : EntrollmentService) {}
  
  userModel = new User("Mani", "manikarthi25@gmail.com", 999999, 'Default', 'morning', true);

  validateTopic(value : any) {
    if(value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.userModel)
    this.entrollmentService.enrollUser(this.userModel)
    .subscribe(
      data => console.log("Success!", data),
      error => console.log("Error!", error)
    );
  }
}
