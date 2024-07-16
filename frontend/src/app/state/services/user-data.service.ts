import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private readonly http: HttpClient) {}

  getUser() {
    return this.http.get<User>('/api/user');
  }
}
