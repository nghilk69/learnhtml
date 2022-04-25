import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = [{
    image: 'https://www.nodemy.vn/projects/html-css-js/profile-card/aNam.jpg',
    name: 'Dinh Nam',
    role: 'Fullstack'
  },
    {
      image: 'https://www.nodemy.vn/projects/html-css-js/profile-card/aNam.jpg',
      name: 'Ngoc Nghi',
      role: 'Backend'
    },
    {
      image: 'https://www.nodemy.vn/projects/html-css-js/profile-card/aNam.jpg',
      name: 'Ngoc Nam',
      role: 'PM'
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
