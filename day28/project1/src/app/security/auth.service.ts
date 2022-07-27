import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // flag for user logged in successfully
  isLoggedIn = true;
  constructor() { }

  isAuthenticated(){
    return this.isLoggedIn;
  }
}
