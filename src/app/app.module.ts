import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { RequestCreateComponent } from './components/request-create/request-create.component';
import { RequestDetailComponent } from './components/request-detail/request-detail.component';
import { RequestUpdateComponent } from './components/request-update/request-update.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
