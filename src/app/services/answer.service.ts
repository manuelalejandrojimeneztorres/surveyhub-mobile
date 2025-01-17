import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AnswerInterface } from '../interfaces/answer.interface';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private answersEndpoint = 'http://localhost:8080/api/v1/answers';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getAnswers(token: string): Observable<AnswerInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<AnswerInterface[]>(this.answersEndpoint, { headers });
  }

  createAnswer(answer: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("questionId", answer.questionId);
    body.append("responseId", answer.responseId);
    body.append("answer", answer.answer);

    return this.httpClient.post(this.answersEndpoint, body.toString(), { headers });
  }

  deleteAnswer(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.answersEndpoint}/${id}`, { headers });
  }

  getAnswerById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<AnswerInterface>(`${this.answersEndpoint}/${id}`, { headers });
  }

  updateAnswer(id: any, answer: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("questionId", answer.questionId);
    body.append("responseId", answer.responseId);
    body.append("answer", answer.answer);

    return this.httpClient.put(`${this.answersEndpoint}/${id}`, body.toString(), { headers });
  }

}
