import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  @Input() studies: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
