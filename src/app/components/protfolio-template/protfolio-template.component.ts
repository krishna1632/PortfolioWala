import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../../animation';

@Component({
  selector: 'app-protfolio-template',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './protfolio-template.component.html',
  styleUrl: './protfolio-template.component.scss',
  animations: [fadeInAnimation],
})
export class ProtfolioTemplateComponent {
  cards = [
    {
      description: 'A modern, web-inspired resume template.',
      video: 'videos/template1.mp4',
      poster: 'images/template1.webp',
    },
    {
      description: 'Perfect balance of fresh and functional design.',
      video: 'videos/template2.mp4',
      poster: 'images/template2.webp',
    },
    {
      description: 'Classically structured template for professionals.',
      video: 'assets/videos/template3.mp4',
      poster: 'assets/images/template3.png',
    },
    {
      description: 'A visually striking template with a clean look.',
      video: 'assets/videos/template4.mp4',
      poster: 'assets/images/template4.png',
    },
    {
      description: 'Minimal and elegant resume template.',
      video: 'assets/videos/template5.mp4',
      poster: 'assets/images/template5.png',
    },
    {
      description: 'Best template for creative professionals.',
      video: 'assets/videos/template6.mp4',
      poster: 'assets/images/template6.png',
    },
  ];

  constructor(private router: Router) {}

  playVideo(event: MouseEvent) {
    const video = event.target as HTMLVideoElement;
    video.currentTime = 0; // Start from beginning
    video.style.opacity = '1'; // Show video smoothly
    video.play().catch((error) => console.error('Video play error:', error));
  }

  pauseVideo(event: MouseEvent) {
    const video = event.target as HTMLVideoElement;
    video.pause();
    video.currentTime = 0; // Reset video position
    video.style.opacity = '0'; // Hide video smoothly
  }

  navigateToPortfolio() {
    this.router.navigate(['/portfolio-main']);
  }
}
