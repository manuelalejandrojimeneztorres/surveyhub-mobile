import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SurveyStatusInterface } from '../interfaces/survey-status.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyStatusService {

  private surveyStatusesEndpoint = 'http://localhost:8080/api/v1/survey-statuses';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getSurveyStatuses(token: string): Observable<SurveyStatusInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<SurveyStatusInterface[]>(this.surveyStatusesEndpoint, { headers });
  }

  createSurveyStatus(surveyStatus: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("status", surveyStatus.status);

    return this.httpClient.post(this.surveyStatusesEndpoint, body.toString(), { headers });
  }

  deleteSurveyStatus(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.surveyStatusesEndpoint}/${id}`, { headers });
  }

  getSurveyStatusById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<SurveyStatusInterface>(`${this.surveyStatusesEndpoint}/${id}`, { headers });
  }

  updateSurveyStatus(id: any, surveyStatus: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("status", surveyStatus.status);

    return this.httpClient.put(`${this.surveyStatusesEndpoint}/${id}`, body.toString(), { headers });
  }

}
