import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProductService } from 'src/app/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {GrowlModule} from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AutoCompleteModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    TableModule,
    GrowlModule
  ],
  providers: [ProductService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
