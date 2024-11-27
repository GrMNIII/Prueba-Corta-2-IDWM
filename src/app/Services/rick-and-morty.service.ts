import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
  episode: string[];
}

export interface ApiResponse {
  info: { count: number; pages: number; next: string; prev: string };
  results: Character[];
}

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number, name?: string): Observable<ApiResponse> {
    let url = `${this.apiUrl}?page=${page}`;
    if (name) url += `&name=${name}`;
    return this.http.get<ApiResponse>(url);
  }
}
