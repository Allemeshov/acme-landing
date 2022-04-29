import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MainComponent} from './pages/main/main.component';
import {NewsDetailComponent} from './pages/news-detail/news-detail.component';
import {BreadcrumbsModule} from "../../shared/modules/breadcrumbs/breadcrumbs.module";
import {HeaderComponent} from './components/header/header.component';
import {HeaderLinkComponent} from './components/header-link/header-link.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleDatePipe } from './pipes/article-date.pipe';
import {YellowButtonModule} from "../../shared/modules/yellow-button/yellow-button.module";


@NgModule({
  declarations: [
    MainComponent,
    NewsDetailComponent,
    HeaderComponent,
    HeaderLinkComponent,
    ArticleComponent,
    ArticleDatePipe
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
    ]),
    YellowButtonModule
  ]
})
export class LandingModule {
}
