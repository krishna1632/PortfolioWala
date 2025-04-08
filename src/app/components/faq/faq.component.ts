import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../../animation';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, height: '0px', overflow: 'hidden' }),
        animate('400ms ease-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, height: '0px', overflow: 'hidden' })
        ),
      ]),
    ]),

    fadeInAnimation,
  ],
})
export class FaqComponent {
  faqs = [
    {
      question: 'How can I sell or rent my books on Kitaab Duniya?',
      answer: 'To sell or rent your books, you need to create an account...',
      open: false,
    },
    {
      question: 'How do I find and buy or rent books on Kitaab Duniya?',
      answer: 'You can search for books using the search bar...',
      open: false,
    },
    {
      question: 'Can I borrow books from a library through Kitaab Duniya?',
      answer: 'Yes, Kitaab Duniya also facilitates book borrowing...',
      open: false,
    },
    {
      question: 'How are payments handled on Kitaab Duniya?',
      answer: 'Payments are handled directly between the buyer and seller...',
      open: false,
    },
    {
      question: 'What should I do if I have an issue with a seller?',
      answer: 'If you encounter any issues, you can report the problem...',
      open: false,
    },
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
