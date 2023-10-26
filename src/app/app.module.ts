import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LaptopComponent } from './core/laptop/laptop.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './featrues/home/home/home.component';
import { TecnologiesComponent } from './featrues/tecnologies/tecnologies.component';
import { LaptopService } from './core/laptop/laptop.service';
import { AboutComponent } from './featrues/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TecnologiesComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, SharedModule, LaptopComponent],
  providers: [LaptopService],
  bootstrap: [AppComponent],
})
export class AppModule {}
