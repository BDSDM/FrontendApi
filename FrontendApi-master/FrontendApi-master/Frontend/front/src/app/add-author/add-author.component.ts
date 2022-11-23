import { Component ,OnInit} from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {
  addAuthor:any;
  constructor(private fb:FormBuilder,private routes:Router,private authorservice:AuthorsService){
    this.addAuthor = fb.group(
      {author:['',Validators.required],
      message:['',Validators.required],}
    )
  }
  ngOnInit():void{}

  zzzz(){
  console.log(this.addAuthor.value);
  this.authorservice.addAuthor(this.addAuthor.value).subscribe((data:any)=>{
    console.log(data);
    this.routes.navigate(['/list-author']);
    
  })
  
  }
}
