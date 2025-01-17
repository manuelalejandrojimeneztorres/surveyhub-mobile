import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AnswerOptionInterface } from '../interfaces/answer-option.interface';

@Injectable({
  providedIn: 'root'
})
export class AnswerOptionService {

  private answerOptionsEndpoint = 'http://localhost:8080/api/v1/answer-options';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getAnswerOptions(token: string): Observable<AnswerOptionInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<AnswerOptionInterface[]>(this.answerOptionsEndpoint, { headers });
  }

  createAnswerOption(answerOption: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("answerId", answerOption.answerId);
    body.append("questionOptionId", answerOption.questionOptionId);

    return this.httpClient.post(this.answerOptionsEndpoint, body.toString(), { headers });
  }

  deleteAnswerOption(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.answerOptionsEndpoint}/${id}`, { headers });
  }

  getAnswerOptionById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<AnswerOptionInterface>(`${this.answerOptionsEndpoint}/${id}`, { headers });
  }

  updateAnswerOption(id: any, answerOption: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("answerId", answerOption.answerId);
    body.append("questionOptionId", answerOption.questionOptionId);

    return this.httpClient.put(`${this.answerOptionsEndpoint}/${id}`, body.toString(), { headers });
  }

}
