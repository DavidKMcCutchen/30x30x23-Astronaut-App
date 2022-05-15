import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person, AstroPagination } from "@astronaut-app/api-interfaces";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


const BASE_URL = 'http://api.open-notify.org/';
const MODEL = 'astros';



@Injectable({
  providedIn: 'root'
})
export class AstroService {


  constructor(private http: HttpClient) { }

  // CRUD Functions.  Please note that we only have
  // read functions.  This is because we do not own
  // the API. There ARE ways to perform C, U and D but
  // we will skip this for now.

  getAll(): Observable<Person[]> {
    return this.http.get<AstroPagination>(this.getUrl()).pipe(
      map((response) => response.people)
    );
  };

  getOne(id: string): Observable<Person> {
    return this.http.get<Person>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
