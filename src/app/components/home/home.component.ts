import { Component, HostListener } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ContentComponent } from '../content/content.component';
import { ProtfolioTemplateComponent } from '../protfolio-template/protfolio-template.component';
import { FaqComponent } from '../faq/faq.component';
import { CustomersComponent } from '../customers/customers.component';
import { fadeInAnimation } from '../../animation';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ContentComponent,
    ProtfolioTemplateComponent,
    FaqComponent,
    CustomersComponent,
    AboutComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInAnimation],
})
export class HomeComponent {
  // Initial state - only hero visible
  showHero = 'visible';
  showAbout = 'hidden';
  showContent = 'hidden';
  showPortfolio = 'hidden';
  showFaq = 'hidden';
  showCustomers = 'hidden';

  // Track which sections have been shown
  hasShownAbout = false;
  hasShownContent = false;
  hasShownPortfolio = false;
  hasShownFaq = false;
  hasShownCustomers = false;

  ngOnInit() {
    // Initial check
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.checkVisibility();
  }

  checkVisibility() {
    // Get positions of all elements
    const heroEl = document.querySelector('app-hero');
    const aboutEl = document.querySelector('app-about');
    const contentEl = document.querySelector('app-content');
    const portfolioEl = document.querySelector('app-protfolio-template');
    const faqEl = document.querySelector('app-faq');
    const customersEl = document.querySelector('app-customers');

    // Calculate when to show each section
    if (aboutEl && !this.hasShownAbout) {
      const aboutPos = aboutEl.getBoundingClientRect().top;
      if (aboutPos < window.innerHeight * 0.75) {
        this.showAbout = 'visible';
        this.hasShownAbout = true;
      }
    }

    if (contentEl && !this.hasShownContent) {
      const contentPos = contentEl.getBoundingClientRect().top;
      if (contentPos < window.innerHeight * 0.75) {
        this.showContent = 'visible';
        this.hasShownContent = true;
      }
    }

    if (portfolioEl && !this.hasShownPortfolio) {
      const portfolioPos = portfolioEl.getBoundingClientRect().top;
      if (portfolioPos < window.innerHeight * 0.75) {
        this.showPortfolio = 'visible';
        this.hasShownPortfolio = true;
      }
    }

    if (faqEl && !this.hasShownFaq) {
      const faqPos = faqEl.getBoundingClientRect().top;
      if (faqPos < window.innerHeight * 0.75) {
        this.showFaq = 'visible';
        this.hasShownFaq = true;
      }
    }

    if (customersEl && !this.hasShownCustomers) {
      const customersPos = customersEl.getBoundingClientRect().top;
      if (customersPos < window.innerHeight * 0.75) {
        this.showCustomers = 'visible';
        this.hasShownCustomers = true;
      }
    }
  }
}
