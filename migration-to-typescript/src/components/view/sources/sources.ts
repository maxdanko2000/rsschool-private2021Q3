import './sources.css';

export type TSourcesArticles={
    name: string,
    id: string
}


class Sources {
    draw(data:Array<TSourcesArticles>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = (<HTMLTemplateElement>sourceItemTemp).content.cloneNode(true);

            ((<HTMLElement>sourceClone).querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            ((<HTMLElement>sourceClone).querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
