import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { QuestionInterface } from '../interfaces/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionsEndpoint = 'http://localhost:8080/api/v1/questions';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    });
  }

  getQuestions(token: string): Observable<QuestionInterface[]> {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<QuestionInterface[]>(this.questionsEndpoint, { headers });
  }

  createQuestion(question: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("surveyId", question.surveyId);
    body.append("questionTypeId", question.questionTypeId);
    body.append("order", question.order);
    body.append("text", question.text);
    body.append("isMandatory", question.isMandatory);

    return this.httpClient.post(this.questionsEndpoint, body.toString(), { headers });
  }

  deleteQuestion(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.delete(`${this.questionsEndpoint}/${id}`, { headers });
  }

  getQuestionById(id: any, token: string) {
    const headers = this.getAuthHeaders(token);

    return this.httpClient.get<QuestionInterface>(`${this.questionsEndpoint}/${id}`, { headers });
  }

  updateQuestion(id: any, question: any, token: string) {
    const headers = this.getAuthHeaders(token);

    const body = new URLSearchParams();
    body.append("surveyId", question.surveyId);
    body.append("questionTypeId", question.questionTypeId);
    body.append("order", question.order);
    body.append("text", question.text);
    body.append("isMandatory", question.isMandatory);

    return this.httpClient.put(`${this.questionsEndpoint}/${id}`, body.toString(), { headers });
  }

}
