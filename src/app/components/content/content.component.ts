import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { fadeInAnimation } from '../../animation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [fadeInAnimation],
})
export class ContentComponent {
  cardsData = [
    { id: 1, photo: 'images/template3.png' },
    { id: 2, photo: 'images/template1.webp' },
    { id: 3, photo: 'images/template2.webp' },
    { id: 4, photo: 'assets/images/Rishi.jpg' },
    { id: 5, photo: 'assets/images/pk.jpg' },
    { id: 6, photo: 'assets/images/ayush.jpg' },
    { id: 7, photo: 'images/template4.png' },
    { id: 8, photo: 'images/template4.png' },
  ];
}
