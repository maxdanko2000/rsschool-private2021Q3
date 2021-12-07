import { Template } from 'webpack';
import './news.css';

export type TNewsArticles = {
    _item: string,
    idx: number,
    urlToImage: string,
    author: string,
    url: string,
    description: string,
    title: string,
    publishedAt: string,
    source:{
        id: string,
        name: string
    }
}

class News {
    draw(data: Array<TNewsArticles>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp= <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone: Node = (newsItemTemp).content.cloneNode(true);

            if (idx % 2) (<HTMLElement>newsClone).querySelector('.news__item')!.classList.add('alt');

           ((<HTMLElement>newsClone).querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = 
            `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            ((<HTMLElement>newsClone).querySelector('.news__meta-author') as HTMLElement).textContent = item.author || item.source.name;
            ((<HTMLElement>newsClone).querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            ((<HTMLElement>newsClone).querySelector('.news__description-title') as HTMLElement).textContent = item.title;
            ((<HTMLElement>newsClone).querySelector('.news__description-source') as HTMLElement).textContent = item.source.name;
            ((<HTMLElement>newsClone).querySelector('.news__description-content') as HTMLElement).textContent = item.description;
            ((<HTMLElement>newsClone).querySelector('.news__read-more a') as HTMLElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLElement).innerHTML = '';
        (document.querySelector('.news') as HTMLElement).appendChild(fragment);
    }
}

export default News;
