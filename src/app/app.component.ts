import { Component } from '@angular/core';
import { UserService } from './Services/user.service';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  user: User;

  constructor(userService: UserService) {
    this.user = userService.getUserDetails();
  }
}
