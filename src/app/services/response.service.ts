import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ResponseInterface } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private responsesEndpoint = 'http://localhost:8080/api/v1/responses';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getResponses(token: string): Observable<ResponseInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<ResponseInterface[]>(this.responsesEndpoint, { headers });
  }

  createResponse(response: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("surveyId", response.surveyId);
    body.append("systemUserId", response.systemUserId);
    body.append("beginDate", response.beginDate);
    body.append("endDate", response.endDate);

    return this.httpClient.post(this.responsesEndpoint, body.toString(), { headers });
  }

  deleteResponse(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.responsesEndpoint}/${id}`, { headers });
  }

  getResponseById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<ResponseInterface>(`${this.responsesEndpoint}/${id}`, { headers });
  }

  updateResponse(id: any, response: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("surveyId", response.surveyId);
    body.append("systemUserId", response.systemUserId);
    body.append("beginDate", response.beginDate);
    body.append("endDate", response.endDate);

    return this.httpClient.put(`${this.responsesEndpoint}/${id}`, body.toString(), { headers });
  }

}
