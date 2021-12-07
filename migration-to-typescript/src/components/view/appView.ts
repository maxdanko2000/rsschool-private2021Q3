import News from './news/news';
import Sources from './sources/sources';
import {TNewsArticles} from './news/news'
import {TSourcesArticles} from './sources/sources'


export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export type DataNews={
    articles: Array<TNewsArticles>   
}

export type DataSources = {
    sources: Array<TSourcesArticles>
}

export default AppView;
