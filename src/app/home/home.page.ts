import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: any

  constructor(private NewsService:NewsService) {
    this.loadNews()
  }
  

  loadNews(){
    this.NewsService.getNews("top-headlines?country=us").subscribe(news => {
      this.articles = news['articles'];
      console.log(this.articles);
    })

  }

}
