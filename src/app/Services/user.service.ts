import { Injectable } from '@angular/core';
import { User, SocialMedia } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User();
  constructor() { }

  public getUserDetails(): User {

    const interests = ['Coding', 'Movies', 'Money'];

    this.user.addName('Jack', 'Singh', 'Test');
    this.user.age = 12;
    this.user.avatarPath = '../assets/Male-Avatar.png';
    this.user.shortDescription = 'coffee lover & beard lover ';
    this.user.description = "I'm a developer. I worked with C# and Java. I've been exposed to different technologies.I work on this project when i want to learn new things about html,css,bootstrap,angular. I try to use bootstrap as much as i can but sometimes i prefer not to spend my time learning that.";
    this.user.interests = interests;
    this.user.sex = 'Male';
    this.user.socialMedia = this.getSocialMediaPaths();

    return this.user;
  }

  private getSocialMediaPaths(): SocialMedia[] {
    const sm  = new SocialMedia();
    const sm2 = new SocialMedia();
    const sm3 = new SocialMedia();
    const smArray: SocialMedia[] = [];

    sm.name = 'instagram';
    sm.imagePath = '../../assets/instagram.png';
    sm.website = 'http://www.instagram.com';

    sm2.name = 'linkedin';
    sm2.imagePath = '../../assets/linkedin.png';
    sm2.website = 'http://www.linkedin.com';

    sm3.name = 'twitter';
    sm3.imagePath = '../../assets/twitter.png';
    sm3.website = 'http://www.twitter.com';

    smArray.push(sm);
    smArray.push(sm2);
    smArray.push(sm3);

    return smArray;
  }
}
