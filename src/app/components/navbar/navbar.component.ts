import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SignupComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showSignupModal = false;

  // In navbar.component.ts
  openSignup() {
    this.showSignupModal = true;
    document.body.classList.add('modal-open');
  }

  closeSignup() {
    this.showSignupModal = false;
    document.body.classList.remove('modal-open');
  }
}
