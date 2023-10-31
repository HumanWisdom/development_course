import {
  animate, group, query, style, transition, trigger
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition(':increment', slideTo('right')),
    transition(':decrement', slideTo('left')),
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('550ms ease-out', style({ [direction]: '100%', 'opacity': '0.6' }))
      ], optional),
      query(':enter', [
        animate('550ms ease-in', style({ [direction]: '0%' }))
      ])
    ]),
  ];
}
