import { Component, OnInit, Input } from '@angular/core';
import { SocialMedia } from '../../Models/User';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input() socialMedia: SocialMedia[];

  constructor() { }

  ngOnInit() {
    console.log('---',this.socialMedia);
  }

}
