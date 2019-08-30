import { Component, OnInit, Input } from '@angular/core';
import { Name } from '../../Models/User';

@Component({
  selector: 'pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {

  @Input() name: Name;
  @Input() shortDescription: string;
  fullName: string;

  constructor() {  }

  ngOnInit() {
   
  }

}

