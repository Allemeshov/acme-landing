import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MainComponent} from './pages/main/main.component';
import {NewsDetailComponent} from './pages/news-detail/news-detail.component';
import {BreadcrumbsModule} from "../../shared/modules/breadcrumbs/breadcrumbs.module";
import {HeaderComponent} from './components/header/header.component';
import {HeaderLinkComponent} from './components/header-link/header-link.component';


@NgModule({
  declarations: [
    MainComponent,
    NewsDetailComponent,
    HeaderComponent,
    HeaderLinkComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    RouterModule.forChild([
      {
        path: '', component: HeaderComponent, children: [
          {path: '', component: MainComponent},
          {path: ':id', component: NewsDetailComponent}
        ]
      }
    ])
  ]
})
export class LandingModule {
}
