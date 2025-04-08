import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-50px)', opacity: 0 }),
        animate(
          '600ms 300ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(50px)', opacity: 0 }),
        animate(
          '600ms 300ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate(
          '600ms 600ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('staggerButtons', [
      transition(':enter', [
        query('div', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('200ms', [
            animate(
              '500ms ease-out',
              keyframes([
                style({ opacity: 0, transform: 'translateY(20px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('buttonHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.05)' })),
      transition('normal <=> hover', animate('200ms ease-in-out')),
    ]),
  ],
})
export class HeroComponent {
  textArray: string[] = [
    'AI-powered resumes',
    'Stunning portfolios',
    'Job-winning templates',
    'Professional branding',
  ];
  currentText: string = '';
  currentIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 50;
  delayBetweenTexts: number = 1500;

  constructor() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    setTimeout(() => {
      this.typeText();
    }, 1000); // Increased initial delay for better sequencing
  }

  typeText() {
    const fullText = this.textArray[this.currentIndex];

    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.charIndex--);
    } else {
      this.currentText = fullText.substring(0, this.charIndex++);
    }

    let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    // Randomize speed slightly for more natural typing
    if (!this.isDeleting) {
      speed += Math.random() * 50 - 25;
    }

    if (!this.isDeleting && this.charIndex > fullText.length) {
      speed = this.delayBetweenTexts;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex < 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
      speed = 500; // Pause before typing next text
    }

    setTimeout(() => this.typeText(), speed);
  }
}
