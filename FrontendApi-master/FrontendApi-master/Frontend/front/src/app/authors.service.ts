import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}
  addAuthor(author: any) {
    return this.http.post('http://localhost:5500/posts/', author);
  }

  listAuthor() {
    return this.http.get('http://localhost:5500/posts/');
  }
  deleteAuthor(id: any) {
    return this.http.delete('http://localhost:5500/posts/' + id);
  }

  singleAuthor(id: any) {
    return this.http.get('http://localhost:5500/posts/' + id);
  }

  updateAuthor(id: any, author: any) {
    return this.http.put('http://localhost:5500/posts/' + id, author);
  }
}
