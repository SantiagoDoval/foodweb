import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './food/pages/home/home.component';
import { CategoryComponent } from './food/pages/category/category.component';
import { AboutComponent } from './food/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CategoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
