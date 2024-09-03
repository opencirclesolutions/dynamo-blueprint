import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  roles?: string[];


  login() {

  }

  logout() {

  }

  getAccessToken() {

  }

  public hasRole(role: string | string[]): boolean {
    return true;
  }

  public initConfiguration(): void {

  }
}
