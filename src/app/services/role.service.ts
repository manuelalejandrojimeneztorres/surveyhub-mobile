import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RoleInterface } from '../interfaces/role.interface';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private rolesEndpoint = 'http://localhost:8080/api/v1/roles';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getRoles(token: string): Observable<RoleInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<RoleInterface[]>(this.rolesEndpoint, { headers });
  }

  createRole(role: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("name", role.name);
    body.append("description", role.description);

    return this.httpClient.post(this.rolesEndpoint, body.toString(), { headers });
  }

  deleteRole(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.rolesEndpoint}/${id}`, { headers });
  }

  getRoleById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<RoleInterface>(`${this.rolesEndpoint}/${id}`, { headers });
  }

  updateRole(id: any, role: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("name", role.name);
    body.append("description", role.description);

    return this.httpClient.put(`${this.rolesEndpoint}/${id}`, body.toString(), { headers });
  }

}
