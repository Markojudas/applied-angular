import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>ALL The Issues Sfutt</h1>
    <a routerLink="begin">Start A New Issue</a>
    <router-outlet />
  `,
  styles: ``,
})
export class CreateIssuesComponent {}
