import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'abeec7e7957d4ae3a9e946feb5231585', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
