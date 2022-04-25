import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profilecomponent.component.html',
  styleUrls: ['./profilecomponent.component.css']
})
export class ProfilecomponentComponent implements OnInit {

  @Input() user: any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
