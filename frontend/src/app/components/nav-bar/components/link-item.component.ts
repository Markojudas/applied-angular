import { Component, input } from '@angular/core';
import { NavItem } from '../models';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-link-item',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <li>
      <a [routerLink]="link().link">{{ link().label }}</a>
    </li>
  `,
  styles: ``,
})
export class LinkItemComponent {
  link = input.required<NavItem>();
}
