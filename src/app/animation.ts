import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  state(
    'visible',
    style({
      opacity: 1,
      transform: 'translateY(0)',
    })
  ),
  state(
    'hidden',
    style({
      opacity: 0,
      transform: 'translateY(20px)',
    })
  ),
  transition('hidden => visible', [animate('600ms ease-out')]),
  transition('visible => hidden', [animate('300ms ease-in')]),
]);
