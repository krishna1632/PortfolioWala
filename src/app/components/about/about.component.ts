import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openChatbot() {
    // Implement your chatbot opening logic here
    console.log('Opening AI Chatbot');
    // Example: you might open a modal or redirect to a chat page
    alert('AI Chatbot will open here!');

    // If you're using a chatbot service, you might initialize it here
    // window.ChatbotWidget.open();
  }
}
