import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { QuestionOptionInterface } from '../interfaces/question-option.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionOptionService {

  private questionOptionsEndpoint = 'http://localhost:8080/api/v1/question-options';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getQuestionOptions(token: string): Observable<QuestionOptionInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<QuestionOptionInterface[]>(this.questionOptionsEndpoint, { headers });
  }

  createQuestionOption(questionOption: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("questionId", questionOption.questionId);
    body.append("order", questionOption.order);
    body.append("value", questionOption.value);

    return this.httpClient.post(this.questionOptionsEndpoint, body.toString(), { headers });
  }

  deleteQuestionOption(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.questionOptionsEndpoint}/${id}`, { headers });
  }

  getQuestionOptionById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<QuestionOptionInterface>(`${this.questionOptionsEndpoint}/${id}`, { headers });
  }

  updateQuestionOption(id: any, questionOption: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("questionId", questionOption.questionId);
    body.append("order", questionOption.order);
    body.append("value", questionOption.value);

    return this.httpClient.put(`${this.questionOptionsEndpoint}/${id}`, body.toString(), { headers });
  }

}
