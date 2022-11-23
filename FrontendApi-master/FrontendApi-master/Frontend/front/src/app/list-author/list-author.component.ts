import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css'],
})
export class ListAuthorComponent {
  constructor(private authorservice: AuthorsService, private routes: Router) {}
  authors: any;
  ngOnInit(): void {
    this.loadAuthor();
  }
  loadAuthor() {
    this.authorservice.listAuthor().subscribe((data: any) => {
      console.log(data);
      this.authors = data;
    });
  }

  delAuthor(datas: any) {
    this.authorservice.deleteAuthor(datas._id).subscribe((data) => {
      console.log(data);
      this.authors = this.authors.filter((u: any) => u !== datas);
    });
  }
}
