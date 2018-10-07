import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HttpClientModule} from '@angular/common/http';

const routes: Routes = [


  { path: 'home' , component: PortfolioComponent , pathMatch: 'full'},
  { path: 'about' , component: AboutComponent , pathMatch: 'full'},
  { path: 'item' , component: ItemComponent , pathMatch: 'full'},

  { path: '**' , redirectTo: 'home' , pathMatch : 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash : true}),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
