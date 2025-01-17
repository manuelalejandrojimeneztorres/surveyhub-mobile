import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SystemUserRoleInterface } from '../interfaces/system-user-role.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemUserRoleService {

  private systemUserRolesEndpoint = 'http://localhost:8080/api/v1/system-user-roles';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getSystemUserRoles(token: string): Observable<SystemUserRoleInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<SystemUserRoleInterface[]>(this.systemUserRolesEndpoint, { headers });
  }

  createSystemUserRole(systemUserRole: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("systemUserId", systemUserRole.systemUserId);
    body.append("roleId", systemUserRole.roleId);

    return this.httpClient.post(this.systemUserRolesEndpoint, body.toString(), { headers });
  }

  deleteSystemUserRole(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.systemUserRolesEndpoint}/${id}`, { headers });
  }

  getSystemUserRoleById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<SystemUserRoleInterface>(`${this.systemUserRolesEndpoint}/${id}`, { headers });
  }

  updateSystemUserRole(id: any, systemUserRole: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("systemUserId", systemUserRole.systemUserId);
    body.append("roleId", systemUserRole.roleId);

    return this.httpClient.put(`${this.systemUserRolesEndpoint}/${id}`, body.toString(), { headers });
  }

}
