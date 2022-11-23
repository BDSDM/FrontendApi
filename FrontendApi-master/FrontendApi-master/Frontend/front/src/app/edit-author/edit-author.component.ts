import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css'],
})
export class EditAuthorComponent {
  addAuthor: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private authorservice: AuthorsService,
    private url: ActivatedRoute
  ) {
    this.addAuthor = fb.group({
      author: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.authorservice.singleAuthor(this.id).subscribe((data) => {
      this.addAuthor.patchValue(data);
    });
  }

  onSubmit() {
    console.log(this.addAuthor.value);
    this.authorservice
      .updateAuthor(this.id, this.addAuthor.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/list-author']);
      });
  }
}
