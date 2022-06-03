import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './food/pages/home/home.component';
import { CategoryComponent } from './food/pages/category/category.component';
import { AboutComponent } from './food/pages/about/about.component';
import { PopularComponent } from './food/pages/popular/popular.component';
import { BannerComponent } from './food/pages/banner/banner.component';
import { OrderComponent } from './food/pages/order/order.component';
import { BlogsComponent } from './food/pages/blogs/blogs.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuFoodComponent } from './food/pages/menu-food/menu-food.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CategoryComponent,
    AboutComponent,
    PopularComponent,
    BannerComponent,
    OrderComponent,
    BlogsComponent,
    MenuFoodComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
