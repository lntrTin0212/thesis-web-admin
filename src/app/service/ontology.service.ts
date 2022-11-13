import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OntologyService {
  BASE_URL = "http://localhost:3000/api/v1/topic"

  constructor(
    private http: HttpClient
  ) { }

  getTopics() {
    return this.http.get(`${this.BASE_URL}/getTopics`)
  }

  getTopicDetails(topicName:string) {
    return this.http.get(`${this.BASE_URL}/getSubClass/${topicName}`)
  }
}
