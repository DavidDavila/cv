import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader, } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MacComponent } from './mac/mac.component';
import { LanguagesComponent } from './languages/languages.component';
import { StudiesComponent } from './studies/studies.component';
import { WorkflowComponent } from './workflow/workflow.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MacComponent,
    LanguagesComponent,
    StudiesComponent,
    WorkflowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: (HttpLoaderFactory),
              deps: [HttpClient]
          }
      }),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
