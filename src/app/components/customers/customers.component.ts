import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animation';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
  animations: [fadeInAnimation],
})
export class CustomersComponent {}
