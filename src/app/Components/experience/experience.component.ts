import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../../Models/User';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() experience: Experience[];

  constructor() { }

  ngOnInit() {
  }

}
