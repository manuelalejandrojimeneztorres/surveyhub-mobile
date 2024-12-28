import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { QuestionTypeInterface } from '../interfaces/question-type.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  private questionTypesEndpoint = 'http://localhost:8080/api/v1/question-types';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getQuestionTypes(token: string): Observable<QuestionTypeInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<QuestionTypeInterface[]>(this.questionTypesEndpoint, { headers });
  }

  createQuestionType(questionType: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("type", questionType.type);

    return this.httpClient.post(this.questionTypesEndpoint, body.toString(), { headers });
  }

  deleteQuestionType(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.questionTypesEndpoint}/${id}`, { headers });
  }

  getQuestionTypeById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<QuestionTypeInterface>(`${this.questionTypesEndpoint}/${id}`, { headers });
  }

  updateQuestionType(id: any, questionType: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("type", questionType.type);

    return this.httpClient.put(`${this.questionTypesEndpoint}/${id}`, body.toString(), { headers });
  }

}
