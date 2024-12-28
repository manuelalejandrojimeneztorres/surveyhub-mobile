import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SystemUserInterface } from '../interfaces/system-user.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemUserService {

  private systemUsersEndpoint = 'http://localhost:8080/api/v1/system-users';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    });
  }

  getSystemUsers(token: string): Observable<SystemUserInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<SystemUserInterface[]>(this.systemUsersEndpoint, { headers });
  }

  createSystemUser(systemUser: any, profilePictureBlob: Blob | null) {
    let systemUserFormData = new FormData();
    systemUserFormData.append("loginName", systemUser.loginName);
    systemUserFormData.append("firstName", systemUser.firstName);
    systemUserFormData.append("lastName", systemUser.lastName);
    systemUserFormData.append("emailAddress", systemUser.emailAddress);
    systemUserFormData.append("phoneNumber", systemUser.phoneNumber);
    systemUserFormData.append("passwordHash", systemUser.passwordHash);
    systemUserFormData.append("status", systemUser.status);
    systemUserFormData.append("tokenVersion", systemUser.tokenVersion);

    // systemUserFormData.append("profilePicture", profilePictureBlob);
    if (profilePictureBlob) {
      const fileType = profilePictureBlob.type.split('/')[1];
      systemUserFormData.append('profilePicture', profilePictureBlob, `profilePicture.${fileType}`);
    }

    systemUserFormData.append("lastLoginAt", systemUser.lastLoginAt);
    systemUserFormData.append("lastPasswordChangeAt", systemUser.lastPasswordChangeAt);

    return this.httpClient.post(this.systemUsersEndpoint, systemUserFormData);
  }

  deleteSystemUser(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.systemUsersEndpoint}/${id}`, { headers });
  }

  getSystemUserById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<SystemUserInterface>(`${this.systemUsersEndpoint}/${id}`, { headers });
  }

  updateSystemUser(id: number, systemUser: any, token: string, profilePictureBlob?: Blob) {
    const headers = this.getAuthHeaders(token);

    const systemUserFormData = new FormData();
    systemUserFormData.append('loginName', systemUser.loginName);
    systemUserFormData.append('firstName', systemUser.firstName);
    systemUserFormData.append('lastName', systemUser.lastName);
    systemUserFormData.append('emailAddress', systemUser.emailAddress);
    systemUserFormData.append('phoneNumber', systemUser.phoneNumber);
    systemUserFormData.append('passwordHash', systemUser.passwordHash);
    systemUserFormData.append('status', systemUser.status);
    systemUserFormData.append('tokenVersion', systemUser.tokenVersion.toString());

    if (profilePictureBlob) {
      const fileType = profilePictureBlob.type.split('/')[1];
      systemUserFormData.append('profilePicture', profilePictureBlob, `profilePicture.${fileType}`);
    }

    systemUserFormData.append('lastLoginAt', systemUser.lastLoginAt);
    systemUserFormData.append('lastPasswordChangeAt', systemUser.lastPasswordChangeAt);

    return this.httpClient.put(`${this.systemUsersEndpoint}/${id}`, systemUserFormData, { headers });
  }

}
