import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAuthorComponent } from './list-author/list-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    ListAuthorComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
