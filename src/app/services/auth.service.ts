import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemUserInterface } from '../interfaces/system-user.interface';
import { AuthResponseInterface } from '../interfaces/auth-response.interface';
import { Observable, tap } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  initializedStorage: boolean = false;

  AUTH_SERVER_ADDRESS: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient, private storage: Storage) {
    this.initializeStorage();
  }

  async initializeStorage() {
    if (!this.initializedStorage) await this.storage.create();
    this.initializedStorage = true;
  }

  isInitializedStorage() {
    return this.initializedStorage;
  }

  private getOptions(systemUserInterface: SystemUserInterface) {
    let base64LoginNameAndPasswordHash = window.btoa(systemUserInterface.loginName + ':' + systemUserInterface.passwordHash);

    let basicAccess = 'Basic ' + base64LoginNameAndPasswordHash;

    let options = {
      headers: {
        'Authorization': basicAccess,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };

    return options;
  }

  signUp(systemUserInterface: SystemUserInterface): Observable<AuthResponseInterface> {
    return this.httpClient.post<AuthResponseInterface>(`${this.AUTH_SERVER_ADDRESS}/api/v1/system-users/`, systemUserInterface, this.getOptions(systemUserInterface)).pipe(
      tap(async (res: AuthResponseInterface) => {

        if (res.user) {
          await this.storage.set('token', res.access_token);
        }
      })

    );
  }

  signIn(systemUserInterface: SystemUserInterface): Observable<AuthResponseInterface> {
    return this.httpClient.post<AuthResponseInterface>(`${this.AUTH_SERVER_ADDRESS}/api/v1/system-users/signin`, null, this.getOptions(systemUserInterface)).pipe(
      tap(async (res: AuthResponseInterface) => {

        if (res.user) {
          await this.storage.set('token', res.access_token);
        }
      })
    );
  }

  async signOut() {
    try {
      await this.storage.remove('token');
      console.log('Logout successful');
    } catch (error) {
      console.error('Error clearing session:', error);
    }
  }

  async isSignedIn() {
    let token = await this.storage.get('token');
    if (token) { // Just check if exists. This should be checked with current date.
      return true;
    }
    return false;
  }
}
