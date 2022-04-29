import {Component, Input} from '@angular/core';
import {ArticleInterface} from "../../interfaces/article.interface";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() isPlainerStyle = false;

  @Input() article: ArticleInterface;

  constructor() {
    this.article = {
      id: 0,
      title: '',
      description: '',
      date: new Date(),
      imageUrl: ''
    };
  }

  getArticleUrl() {
    return `url(${this.article.imageUrl})`;
  }
}
