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
        animate('600ms ease-out', style({ [direction]: '100%' }))
      ], optional),
      query(':enter', [
        animate('600ms ease-in', style({ [direction]: '0%' }))
      ])
    ]),
  ];
}
