import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  image = ['https://www.nodemy.vn/projects/html-css-js/image-gallery/img1.jpeg',
  'https://www.nodemy.vn/projects/html-css-js/image-gallery/img2.jpeg',
      'https://www.nodemy.vn/projects/html-css-js/image-gallery/img3.jpeg',
      'https://www.nodemy.vn/projects/html-css-js/image-gallery/img4.jpeg',
      'https://www.nodemy.vn/projects/html-css-js/image-gallery/img5.jpeg',
      'https://www.nodemy.vn/projects/html-css-js/image-gallery/img6.jpeg',
      'https://www.nodemy.vn/projects/html-css-js/image-gallery/img7.jpeg',
      'https://www.nodemy.vn/projects/html-css-js/image-gallery/img8.jpeg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
