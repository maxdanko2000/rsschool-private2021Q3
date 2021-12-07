
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import {DataNews} from '../view/appView';
import {DataSources} from '../view/appView';


class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as unknown as DataNews)));
        this.controller.getSources((data) => this.view.drawSources(data as unknown as DataSources));
    }
}

export default App;
