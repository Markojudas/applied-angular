import { CanActivateFn, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserFeature } from './state/user/user-feature';

export const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      {
        path: 'signals',
        loadComponent: () =>
          import('./students/signals/signals.component').then(
            (c) => c.SignalsComponent
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    // unnaccesable until user is loaded
    canActivate: [userIsLoadedGuard()],
    loadChildren: () =>
      import('./dashboard/dashboard-routes').then((r) => r.DASHBOARD_ROUTES),
  },
];

function userIsLoadedGuard(): CanActivateFn {
  //dont inject here; doesn't work because not a injection context (ie, not constructor)
  return () => {
    const store = inject(Store); //makes sense here though.
    const userLoaded = store.selectSignal(UserFeature.selectUserLoaded);
    return userLoaded();
  };
}

function userDataLoadedGuard(): CanActivateFn {
  return () => false;
}
