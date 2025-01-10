import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemUserInterface } from '../interfaces/system-user.interface';
import { AuthResponseInterface } from '../interfaces/auth-response.interface';
import { Observable, tap } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  initializedStorage: boolean = false;

  private readonly TOKEN_KEY = 'token';

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

  async signOut(): Promise<void> {
    try {
      await this.removeToken();
      console.log('Logout successful');
    } catch (error) {
      console.error('Error clearing session:', error);
    }
  }

  /*   async isSignedIn() {
      let token = await this.storage.get('token');
      if (token) { // Just check if exists. This should be checked with current date.
        return true;
      }
      return false;
    } */

  async isSignedIn(): Promise<boolean> {
    const token = await this.getToken();
    if (!token || this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  async getSystemUserIdFromToken(): Promise<string | null> {
    const token = await this.getToken();
    if (!token || this.isTokenExpired(token)) return null;

    try {
      const decodedToken: { id: string } = jwtDecode(token);
      return decodedToken.id || null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  async removeToken(): Promise<void> {
    await this.storage.remove(this.TOKEN_KEY);
  }

  async getToken(): Promise<string | null> {
    return await this.storage.get(this.TOKEN_KEY);
  }

  isTokenExpired(token: string): boolean {
    if (!token) return true;

    try {
      const decodedToken: any = jwtDecode(token);
      const expiryDate = decodedToken.exp * 1000;
      return Date.now() > expiryDate;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  }
}
