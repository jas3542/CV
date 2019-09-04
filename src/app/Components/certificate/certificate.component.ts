import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  @Input() certificates: string[];
  constructor() { }

  ngOnInit() {
  }

}
