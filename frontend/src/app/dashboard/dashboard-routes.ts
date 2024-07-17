import { CanActivateFn, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { DashboardComponent } from './dashboard.component';
import { MockupComponent } from './mockup/mockup.component';
import { DashboardNavigationEffect } from './state/effects/navigation.effetc';
import { inject } from '@angular/core';
import { provideState, Store } from '@ngrx/store';
import { UserFeature } from '../state/user/user-feature';
import { UserSoftwareFeature } from './state/reducers/user-software.feature';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    canActivateChild: [userIsLoadedGuard()],
    providers: [
      provideState(UserSoftwareFeature),
      provideEffects([DashboardNavigationEffect]),
    ],
    component: DashboardComponent,
    children: [
      {
        path: 'mock',
        component: MockupComponent,
      },
    ],
  },
];

function userIsLoadedGuard(): CanActivateFn {
  return () => {
    const store = inject(Store);
    const userLoaded = store.selectSignal(UserFeature.selectUserLoaded);
    return userLoaded();
  };
}
