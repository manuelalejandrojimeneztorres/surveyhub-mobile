import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SurveyInterface } from '../interfaces/survey.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private surveysEndpoint = 'http://localhost:8080/api/v1/surveys';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getSurveys(token: string): Observable<SurveyInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<SurveyInterface[]>(this.surveysEndpoint, { headers });
  }

  createSurvey(survey: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("name", survey.name);
    body.append("description", survey.description);
    body.append("startDate", survey.startDate);
    body.append("endDate", survey.endDate);
    body.append("minResponses", survey.minResponses);
    body.append("maxResponses", survey.maxResponses);
    body.append("surveyStatusId", survey.surveyStatusId);

    return this.httpClient.post(this.surveysEndpoint, body.toString(), { headers });
  }

  deleteSurvey(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.surveysEndpoint}/${id}`, { headers });
  }

  getSurveyById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<SurveyInterface>(`${this.surveysEndpoint}/${id}`, { headers });
  }

  updateSurvey(id: any, survey: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("name", survey.name);
    body.append("description", survey.description);
    body.append("startDate", survey.startDate);
    body.append("endDate", survey.endDate);
    body.append("minResponses", survey.minResponses);
    body.append("maxResponses", survey.maxResponses);
    body.append("surveyStatusId", survey.surveyStatusId);

    return this.httpClient.put(`${this.surveysEndpoint}/${id}`, body.toString(), { headers });
  }

}
